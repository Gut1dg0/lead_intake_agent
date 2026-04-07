# Lead Intake Agent

An AI-powered lead intake system built with [CrewAI](https://crewai.com), FastAPI, and Next.js. It classifies incoming customer leads as hot/warm/cold, generates a personalized suggested response, and emails the analysis to a configured recipient.

## What it does

When a lead is submitted (name, service needed, message), two AI agents process it sequentially:

1. **Lead Classifier** — reads the message and assigns a quality tier (`hot`, `warm`, or `cold`) based on urgency, buying intent, and specificity. Produces a 1–2 sentence summary of the customer's need.
2. **Response Writer** — uses the classification and summary to draft a personalized, tone-matched reply the support team can send directly.

The result is emailed to a configured address and returned to the frontend for display.

## Requirements

- Python 3.10–3.13
- [uv](https://docs.astral.sh/uv/) (`pip install uv`)
- Node.js 18+ (for the frontend)
- An Anthropic API key
- An SMTP account for email delivery

## Setup

**1. Clone and install backend dependencies**

```bash
uv sync
```

**2. Configure environment variables**

Create a `.env` file in the repo root (loaded automatically at runtime):

```env
# LLM
ANTHROPIC_API_KEY=your_anthropic_key

# Email notifications
SMTP_HOST=smtp.example.com
SMTP_PORT=587          # optional, defaults to 587
SMTP_USER=you@example.com
SMTP_PASSWORD=your_password
RECIPIENT_EMAIL=recipient@example.com
```

**3. Install frontend dependencies**

```bash
cd frontend
npm install
```

## Running the system

Start both servers — the frontend proxies to the backend on port 8000.

**Backend (FastAPI)**
```bash
uv run serve
# Listening on http://localhost:8000, auto-reloads on file changes
```

**Frontend (Next.js)**
```bash
cd frontend
npm run dev
# Listening on http://localhost:3000
```

Open `http://localhost:3000`, fill in the lead form, and submit.

### Run the crew locally (no server)

```bash
uv run lead_intake_agent
# Runs against a hardcoded sample lead and prints JSON output
```

### Other commands

```bash
uv run train
uv run replay
uv run test
```

## API

`POST /analyze-lead`

```json
{
  "name": "Jane Doe",
  "service_needed": "roof repair",
  "message": "My roof is leaking after last night's storm. Need someone ASAP."
}
```

Returns `{"status": "sent"}` on success. The full analysis (`lead_quality`, `summary`, `suggested_response`) is delivered by email.

`GET /health` — returns `{"status": "ok"}`.

## Assumptions

- **SMTP credentials are always required.** There is no fallback — if any of `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`, or `RECIPIENT_EMAIL` are missing, the `/analyze-lead` endpoint will return a 500 error even if the crew ran successfully.
- **The LLM is Claude 3 Haiku** (`anthropic/claude-3-haiku-20240307`). No other model is configured.
- **CORS is restricted to `http://localhost:3000`.** The backend will reject cross-origin `POST` requests from any other origin.
- **All three lead fields are required and non-empty.** The API returns 422 if any field is blank.
- **Sequential crew execution.** The response writer always waits for the classifier to finish; there is no parallelism.
- **macOS / x86\_64 only.** `pyproject.toml` pins `uv` to `sys_platform == 'darwin' and platform_machine == 'x86_64'`.
