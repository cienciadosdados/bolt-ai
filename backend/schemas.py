from pydantic import BaseModel
from typing import List, Optional

class FunctionBase(BaseModel):
    name: str
    description: str
    parameters: str

class FunctionCreate(FunctionBase):
    pass

class Function(FunctionBase):
    id: int
    agent_id: int

    class Config:
        orm_mode = True

class AgentBase(BaseModel):
    name: str
    description: str
    llm_model: str

class AgentCreate(AgentBase):
    pass

class Agent(AgentBase):
    id: int
    functions: List[Function] = []

    class Config:
        orm_mode = True

class AgentUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    llm_model: Optional[str] = None