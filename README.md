# Lead Intake Agent

An AI-powered lead intake system built with CrewAI, FastAPI, and Next.js. It classifies incoming customer leads as hot/warm/cold, generates a personalized suggested response, and emails the JSON object to a configured recipient.

# Live system

The system was deployed using Render (https://render.com/).
URL of the live system:
https://lead-intake-agent-frontend.onrender.com/

## What it does

When a lead is submitted (name, service needed, message), a crew of two AI agents processes it sequentially:

1. **Lead Classifier** — reads the message and assigns a quality tier (`hot`, `warm`, or `cold`) based on urgency, buying intent, and specificity. Produces a 1–2 sentence summary of the customer's need.
2. **Response Writer** — uses the classification and summary to draft a personalized, tone-matched reply the support team can send directly.

The result is emailed to a configured address.

## Requirements

- Python 3.10–3.13
- [uv](https://docs.astral.sh/uv/) (`pip install uv`)
- Node.js 18+ (for the frontend)
- An Anthropic API key
- A SendGrid account for email delivery


## Assumptions
I used a fake business to personalize the page where the form is displayed. I included a link to the landing page of that same business to make the system look more realistic, as if it was for a real business.

The JSON object used as the final output of the system is emailed to a specific address, thus, imitating what the behavior of the system would be in a real-world scenario, where the output of such a system would probably be provided to a customer support team via email.

For testing purposes, the JSON object is sent to one of my personal email addresses.
