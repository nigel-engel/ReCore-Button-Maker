import React, { useState } from 'react';

export default function ButtonTextInput({ initialText, onTextChange }) {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <div className="keyPairs">
      <label htmlFor="button-text-input">Button Text:</label>
      <input
        id="button-text-input"
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}