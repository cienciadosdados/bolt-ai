from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import agent_router, function_router
from database import engine, Base

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Endereço do frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Criar tabelas no banco de dados
Base.metadata.create_all(bind=engine)

# Incluir rotas
app.include_router(agent_router)
app.include_router(function_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)