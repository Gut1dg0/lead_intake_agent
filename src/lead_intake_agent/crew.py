from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task
from crewai.agents.agent_builder.base_agent import BaseAgent
from typing import List
import os

from lead_intake_agent.models import LeadAnalysisOutput


@CrewBase
class LeadIntakeAgentCrew():
    """Lead Intake Agent crew"""

    agents: List[BaseAgent]
    tasks: List[Task]

    def _get_llm(self) -> LLM:
        return LLM(
            model="anthropic/claude-3-haiku-20240307",
            api_key=os.getenv("ANTHROPIC_API_KEY"),
        )

    @agent
    def lead_classifier(self) -> Agent:
        return Agent(
            config=self.agents_config["lead_classifier"],  # type: ignore[index]
            llm=self._get_llm(),
            verbose=True,
        )

    @agent
    def response_writer(self) -> Agent:
        return Agent(
            config=self.agents_config["response_writer"],  # type: ignore[index]
            llm=self._get_llm(),
            verbose=True,
        )

    @task
    def classify_lead_task(self) -> Task:
        return Task(
            config=self.tasks_config["classify_lead_task"],  # type: ignore[index]
        )

    @task
    def draft_response_task(self) -> Task:
        return Task(
            config=self.tasks_config["draft_response_task"],  # type: ignore[index]
            output_pydantic=LeadAnalysisOutput,
        )

    @crew
    def crew(self) -> Crew:
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )
