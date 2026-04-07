import warnings
warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

import json
import os
import re
import smtplib
from dotenv import load_dotenv

load_dotenv()
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from lead_intake_agent.crew import LeadIntakeAgentCrew
from lead_intake_agent.models import LeadAnalysisOutput


app = FastAPI(title="Lead Intake API")

_allowed_origin = os.environ.get("ALLOWED_ORIGIN", "http://localhost:3000")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[_allowed_origin],
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


class LeadRequest(BaseModel):
    name: str
    service_needed: str
    message: str


def send_lead_email(analysis: LeadAnalysisOutput, lead: LeadRequest) -> None:
    smtp_host = os.environ["SMTP_HOST"]
    smtp_port = int(os.environ.get("SMTP_PORT", "587"))
    smtp_user = os.environ["SMTP_USER"]
    smtp_password = os.environ["SMTP_PASSWORD"]
    recipient = os.environ["RECIPIENT_EMAIL"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"New Lead: {lead.name} — {lead.service_needed}"
    msg["From"] = smtp_user
    msg["To"] = recipient

    body = json.dumps(analysis.model_dump(), indent=2)
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, recipient, msg.as_string())


@app.post("/analyze-lead")
async def analyze_lead(lead: LeadRequest):
    if not lead.name.strip() or not lead.service_needed.strip() or not lead.message.strip():
        raise HTTPException(status_code=422, detail="All fields are required.")

    inputs = {
        "name": lead.name.strip(),
        "service_needed": lead.service_needed.strip(),
        "message": lead.message.strip(),
    }

    try:
        result = LeadIntakeAgentCrew().crew().kickoff(inputs=inputs)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Crew execution failed: {e}")

    if result.pydantic:
        analysis = result.pydantic
    else:
        # Fallback: parse raw output as JSON
        raw = result.raw.strip()
        raw = re.sub(r"^```[a-z]*\n?", "", raw)
        raw = re.sub(r"\n?```$", "", raw)
        try:
            data = json.loads(raw)
            analysis = LeadAnalysisOutput(**data)
        except Exception:
            raise HTTPException(
                status_code=500,
                detail=f"Could not parse crew output as JSON. Raw output: {result.raw[:500]}",
            )

    try:
        send_lead_email(analysis, lead)
    except KeyError as e:
        raise HTTPException(status_code=500, detail=f"Email config missing: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {e}")

    return {"status": "sent"}


@app.get("/health")
async def health():
    return {"status": "ok"}


def serve():
    import uvicorn
    uvicorn.run("lead_intake_agent.api:app", host="0.0.0.0", port=8000, reload=True)
