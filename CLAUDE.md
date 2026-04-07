# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Backend (Python / CrewAI)

All Python commands use `uv` and must be run from the repo root.

```bash
# Install dependencies
uv sync

# Run the crew locally (uses hardcoded sample lead in main.py)
uv run lead_intake_agent   # alias: uv run run_crew

# Start the FastAPI server (http://localhost:8000)
uv run serve

# Run with external trigger
uv run run_with_trigger

# Train / replay / test
uv run train
uv run replay
uv run test
```

The API auto-reloads on file changes (`reload=True` in `serve()`).

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev   # http://localhost:3000
npm run build
```

## Architecture

This is a **two-agent, sequential CrewAI crew** exposed via a FastAPI backend and a Next.js frontend.

**Data flow:**
1. User submits a lead (name, service_needed, message) via the frontend form or directly to `POST /analyze-lead`.
2. The FastAPI endpoint (`src/lead_intake_agent/api.py`) validates input and calls `LeadIntakeAgentCrew().crew().kickoff(inputs=...)`.
3. **Agent 1 — `lead_classifier`**: classifies the lead as `hot/warm/cold` and writes a 1–2 sentence summary.
4. **Agent 2 — `response_writer`**: takes the classification + summary and drafts a personalized reply, returning a raw JSON object.
5. The crew's final output is parsed into `LeadAnalysisOutput` (a Pydantic model with `lead_quality`, `summary`, `suggested_response`).
6. The API emails the analysis to `RECIPIENT_EMAIL` via SMTP and returns `{"status": "sent"}`.
7. The frontend renders the classification badge, intent summary, and suggested response.

**Key files:**
- `src/lead_intake_agent/config/agents.yaml` — agent roles, goals, backstories
- `src/lead_intake_agent/config/tasks.yaml` — task descriptions and expected outputs (uses `{name}`, `{service_needed}`, `{message}` template variables)
- `src/lead_intake_agent/crew.py` — wires agents → tasks → crew; `draft_response_task` uses `output_pydantic=LeadAnalysisOutput`
- `src/lead_intake_agent/models.py` — `LeadAnalysisOutput` Pydantic model (the single source of truth for the output schema)
- `src/lead_intake_agent/api.py` — FastAPI app; falls back to regex-stripping markdown fences and parsing raw JSON if `result.pydantic` is None; sends email via `send_lead_email()` after every successful analysis
- `frontend/app/page.tsx` — single-page Next.js UI; hardcodes `http://localhost:8000`

## LLM

The crew uses `anthropic/claude-3-haiku-20240307` via the `ANTHROPIC_API_KEY` environment variable. Set this before running.

## Environment

Set the following in your shell or a `.env` file (loaded automatically via `python-dotenv` in `api.py`):

```env
# Required for LLM
ANTHROPIC_API_KEY=...

# Required for email notifications (all must be set or the API returns 500)
SMTP_HOST=...
SMTP_PORT=587          # optional, defaults to 587
SMTP_USER=...
SMTP_PASSWORD=...
RECIPIENT_EMAIL=...
```

CORS is configured to allow only `http://localhost:3000` for `POST` requests.
