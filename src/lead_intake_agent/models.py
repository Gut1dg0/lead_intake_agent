from typing import Literal
from pydantic import BaseModel


class LeadAnalysisOutput(BaseModel):
    lead_quality: Literal["hot", "warm", "cold"]
    summary: str
    suggested_response: str
