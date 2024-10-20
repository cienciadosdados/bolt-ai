from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from database import get_db
import models, schemas

agent_router = APIRouter()
function_router = APIRouter()

@agent_router.post("/agents/", response_model=schemas.Agent)
def create_agent(agent: schemas.AgentCreate, db: Session = Depends(get_db)):
    db_agent = models.Agent(**agent.dict())
    db.add(db_agent)
    db.commit()
    db.refresh(db_agent)
    return db_agent

@agent_router.get("/agents/", response_model=List[schemas.Agent])
def read_agents(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    agents = db.query(models.Agent).offset(skip).limit(limit).all()
    return agents

@agent_router.get("/agents/{agent_id}", response_model=schemas.Agent)
def read_agent(agent_id: int, db: Session = Depends(get_db)):
    db_agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if db_agent is None:
        raise HTTPException(status_code=404, detail="Agent not found")
    return db_agent

@agent_router.put("/agents/{agent_id}", response_model=schemas.Agent)
def update_agent(agent_id: int, agent: schemas.AgentUpdate, db: Session = Depends(get_db)):
    db_agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if db_agent is None:
        raise HTTPException(status_code=404, detail="Agent not found")
    for key, value in agent.dict(exclude_unset=True).items():
        setattr(db_agent, key, value)
    db.commit()
    db.refresh(db_agent)
    return db_agent

@agent_router.delete("/agents/{agent_id}")
def delete_agent(agent_id: int, db: Session = Depends(get_db)):
    db_agent = db.query(models.Agent).filter(models.Agent.id == agent_id).first()
    if db_agent is None:
        raise HTTPException(status_code=404, detail="Agent not found")
    db.delete(db_agent)
    db.commit()
    return {"message": "Agent deleted successfully"}

@function_router.post("/functions/", response_model=schemas.Function)
def create_function(function: schemas.FunctionCreate, agent_id: int, db: Session = Depends(get_db)):
    db_function = models.Function(**function.dict(), agent_id=agent_id)
    db.add(db_function)
    db.commit()
    db.refresh(db_function)
    return db_function

@function_router.get("/functions/", response_model=List[schemas.Function])
def read_functions(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    functions = db.query(models.Function).offset(skip).limit(limit).all()
    return functions

@function_router.delete("/functions/{function_id}")
def delete_function(function_id: int, db: Session = Depends(get_db)):
    db_function = db.query(models.Function).filter(models.Function.id == function_id).first()
    if db_function is None:
        raise HTTPException(status_code=404, detail="Function not found")
    db.delete(db_function)
    db.commit()
    return {"message": "Function deleted successfully"}