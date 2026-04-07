import warnings
warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

import json
import os
import re
import urllib.error
import urllib.request
from dotenv import load_dotenv

load_dotenv()
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
    api_key = os.environ["SENDGRID_API_KEY"]
    sender = os.environ["SENDGRID_FROM"]
    recipient = os.environ["RECIPIENT_EMAIL"]

    body = json.dumps({
        "lead_quality": analysis.lead_quality,
        "summary": analysis.summary,
        "suggested_response": analysis.suggested_response,
    }, indent=2)

    payload = json.dumps({
        "personalizations": [{"to": [{"email": recipient}]}],
        "from": {"email": sender},
        "subject": f"New Lead: {lead.name} — {lead.service_needed}",
        "content": [{"type": "text/plain", "value": body}],
    }).encode()

    req = urllib.request.Request(
        "https://api.sendgrid.com/v3/mail/send",
        data=payload,
        headers={"Authorization": f"Bearer {api_key}", "Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            resp.read()
    except urllib.error.HTTPError as e:
        detail = e.read().decode(errors="replace")
        raise RuntimeError(f"SendGrid {e.code}: {detail}")


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
