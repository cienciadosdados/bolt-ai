from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Agent(Base):
    __tablename__ = "agents"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    llm_model = Column(String)

    functions = relationship("Function", back_populates="agent")

class Function(Base):
    __tablename__ = "functions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    parameters = Column(String)
    agent_id = Column(Integer, ForeignKey("agents.id"))

    agent = relationship("Agent", back_populates="functions")