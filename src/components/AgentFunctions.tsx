import React, { useState } from 'react';
import { FunctionSquare, Plus, Trash2 } from 'lucide-react';

interface AgentFunction {
  name: string;
  description: string;
  parameters: string;
}

const AgentFunctions: React.FC = () => {
  const [functions, setFunctions] = useState<AgentFunction[]>([]);
  const [newFunction, setNewFunction] = useState<AgentFunction>({
    name: '',
    description: '',
    parameters: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewFunction((prev) => ({ ...prev, [name]: value }));
  };

  const addFunction = () => {
    if (newFunction.name && newFunction.description) {
      setFunctions([...functions, newFunction]);
      setNewFunction({ name: '', description: '', parameters: '' });
    }
  };

  const removeFunction = (index: number) => {
    setFunctions(functions.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg neon-border">
      <h2 className="text-2xl font-bold mb-4 neon-text flex items-center">
        <FunctionSquare className="mr-2" /> Agent Functions
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={newFunction.name}
          onChange={handleInputChange}
          placeholder="Function Name"
          className="w-full bg-gray-700 text-white px-3 py-2 rounded mb-2"
        />
        <input
          type="text"
          name="description"
          value={newFunction.description}
          onChange={handleInputChange}
          placeholder="Function Description"
          className="w-full bg-gray-700 text-white px-3 py-2 rounded mb-2"
        />
        <textarea
          name="parameters"
          value={newFunction.parameters}
          onChange={handleInputChange}
          placeholder="Function Parameters (JSON)"
          className="w-full bg-gray-700 text-white px-3 py-2 rounded mb-2"
          rows={3}
        />
        <button onClick={addFunction} className="neon-button flex items-center">
          <Plus className="mr-2" /> Add Function
        </button>
      </div>
      <div>
        {functions.map((func, index) => (
          <div key={index} className="bg-gray-700 p-3 rounded mb-2 flex justify-between items-center">
            <div>
              <h3 className="font-bold">{func.name}</h3>
              <p className="text-sm">{func.description}</p>
            </div>
            <button onClick={() => removeFunction(index)} className="text-red-500 hover:text-red-700">
              <Trash2 />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentFunctions;