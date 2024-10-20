# No-Code AI Agents

Este projeto é uma aplicação web baseada em React para customização de agentes de IA sem escrever código. Ele apresenta uma interface escura com tema neon para criar e gerenciar configurações e funções de agentes de IA.

## Pré-requisitos

- Node.js (v14 ou posterior)
- npm (v6 ou posterior)
- Python (v3.7 ou posterior)
- pip (gerenciador de pacotes Python)

## Começando

Siga estes passos para configurar e executar o projeto No-Code AI Agents:

### Frontend

1. Clone o repositório e navegue até a pasta do projeto.

2. Instale as dependências do frontend:
   ```
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```

4. Abra seu navegador e acesse `http://localhost:5173` para ver a aplicação No-Code AI Agents rodando.

### Backend

1. Navegue até a pasta `backend`:
   ```
   cd backend
   ```

2. Crie um ambiente virtual Python (opcional, mas recomendado):
   ```
   python -m venv venv
   source venv/bin/activate  # No Windows, use `venv\Scripts\activate`
   ```

3. Instale as dependências do backend:
   ```
   pip install -r requirements.txt
   ```

4. Inicie o servidor backend:
   ```
   python main.py
   ```

O backend estará rodando em `http://localhost:8000`.

## Funcionalidades

- Personalizar configurações de agentes de IA (nome, descrição e modelo LLM)
- Adicionar e remover funções de agentes com nomes, descrições e parâmetros
- Interface escura com tema neon para um visual futurista
- Backend em Python com FastAPI para gerenciar agentes e funções
- Armazenamento de dados em banco SQLite usando SQLAlchemy

## Estrutura do Projeto

```
no-code-ai-agents/
├── src/
│   ├── components/
│   │   ├── AgentCustomization.tsx
│   │   └── AgentFunctions.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── routes.py
│   └── requirements.txt
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## API Endpoints

O backend fornece os seguintes endpoints:

- `POST /agents/`: Criar um novo agente
- `GET /agents/`: Listar todos os agentes
- `GET /agents/{agent_id}`: Obter detalhes de um agente específico
- `PUT /agents/{agent_id}`: Atualizar um agente existente
- `DELETE /agents/{agent_id}`: Excluir um agente
- `POST /functions/`: Criar uma nova função para um agente
- `GET /functions/`: Listar todas as funções
- `DELETE /functions/{function_id}`: Excluir uma função

## Contribuindo

Sinta-se à vontade para enviar issues e pull requests para melhorar o projeto.

## Licença

Este projeto é open-source e disponível sob a Licença MIT.