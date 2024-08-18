import React, { useState } from 'react';

function InputForm({ onGenerateCode }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerateCode(prompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your code requirements here..."
        rows="5"
        cols="50"
      />
      <button type="submit">Generate Code</button>
    </form>
  );
}

export default InputForm;
