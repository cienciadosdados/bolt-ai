import React, { useState } from 'react';
import { Bot, Zap } from 'lucide-react';
import AgentCustomization from './components/AgentCustomization';
import AgentFunctions from './components/AgentFunctions';

interface AgentSettings {
  name: string;
  description: string;
  llmModel: string;
}

function App() {
  const [agentSettings, setAgentSettings] = useState<AgentSettings | null>(null);

  const handleSaveAgentSettings = (settings: AgentSettings) => {
    setAgentSettings(settings);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold neon-text flex items-center justify-center">
          <Bot className="mr-2" /> No-Code AI Agents
        </h1>
        <p className="text-center mt-2">Customize your AI agents with ease</p>
      </header>
      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AgentCustomization onSave={handleSaveAgentSettings} />
          <AgentFunctions />
        </div>
        {agentSettings && (
          <div className="mt-8 bg-gray-800 p-6 rounded-lg neon-border">
            <h2 className="text-2xl font-bold mb-4 neon-text flex items-center">
              <Zap className="mr-2" /> Active Agent
            </h2>
            <p><strong>Name:</strong> {agentSettings.name}</p>
            <p><strong>Description:</strong> {agentSettings.description}</p>
            <p><strong>LLM Model:</strong> {agentSettings.llmModel}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;