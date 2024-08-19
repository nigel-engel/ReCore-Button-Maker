import React, { useState } from 'react';

export default function ButtonTextInput({ label, initialText, onTextChange }) {
  const [text, setText] = useState(initialText);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    onTextChange(newText);
  };

  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <div className="keyPairs">
      <label htmlFor="button-text-input">{label}</label>
      <input
      label={label}
        id="button-text-input"
        type="text"
        value={text}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
}