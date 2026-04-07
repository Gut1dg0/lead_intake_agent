#!/usr/bin/env python
import sys
import warnings

from lead_intake_agent.crew import LeadIntakeAgentCrew

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")


def run():
    """Run the crew with sample data for local testing."""
    inputs = {
        "name": "John Smith",
        "service_needed": "roof repair",
        "message": "Hi, my roof is leaking badly after the storm last night. Water is coming through the ceiling in two rooms. I need someone out ASAP.",
    }

    try:
        result = LeadIntakeAgentCrew().crew().kickoff(inputs=inputs)
        if result.pydantic:
            print(result.pydantic.model_dump_json(indent=2))
        else:
            print(result.raw)
    except Exception as e:
        raise Exception(f"An error occurred while running the crew: {e}")


if __name__ == "__main__":
    run()
