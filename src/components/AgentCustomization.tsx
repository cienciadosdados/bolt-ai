import React, { useState } from 'react';
import { Settings } from 'lucide-react';

interface AgentCustomizationProps {
  onSave: (settings: AgentSettings) => void;
}

interface AgentSettings {
  name: string;
  description: string;
  llmModel: string;
}

const AgentCustomization: React.FC<AgentCustomizationProps> = ({ onSave }) => {
  const [settings, setSettings] = useState<AgentSettings>({
    name: '',
    description: '',
    llmModel: 'gpt-3.5-turbo',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(settings);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg neon-border">
      <h2 className="text-2xl font-bold mb-4 neon-text flex items-center">
        <Settings className="mr-2" /> Agent Customization
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Agent Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={settings.name}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={settings.description}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="llmModel" className="block mb-2">
            LLM Model
          </label>
          <select
            id="llmModel"
            name="llmModel"
            value={settings.llmModel}
            onChange={handleChange}
            className="w-full bg-gray-700 text-white px-3 py-2 rounded"
          >
            <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
            <option value="gpt-4">GPT-4</option>
            <option value="claude-v1">Claude v1</option>
          </select>
        </div>
        <button type="submit" className="neon-button">
          Save Agent Settings
        </button>
      </form>
    </div>
  );
};

export default AgentCustomization;