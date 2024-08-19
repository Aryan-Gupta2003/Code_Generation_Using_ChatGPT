import React, { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import GeneratedCode from './components/GeneratedCode';
import Navbar from './components/Navbar';
import History from './components/History';
import './App.css';

function App() {
  const [generatedCode, setGeneratedCode] = useState("");

  const handleGenerateCode = async (prompt) => {
    try {
      const response = await fetch('http://localhost:5000/generate_code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      if (data.code) {
        setGeneratedCode(data.code);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <h1>Code Generation using ChatGPT</h1>
        <InputForm onGenerateCode={handleGenerateCode} />
        <GeneratedCode code={generatedCode} />
        <History />
      </div>
    </div>
  );
}

export default App;
