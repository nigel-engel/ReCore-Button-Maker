import React from "react";

export default function FontWeight({ fontWeight, label, id, onChange }) {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="dropdown"
        name={id}
        value={fontWeight}
        onChange={onChange}
      >
        <option value="100">Thin (100)</option>
        <option value="200">Extra Light (200)</option>
        <option value="300">Light (300)</option>
        <option value="400">Normal (400)</option>
        <option value="500">Medium (500)</option>
        <option value="600">Semi Bold (600)</option>
        <option value="700">Bold (700)</option>
        <option value="800">Extra Bold (800)</option>
        <option value="900">Black (900)</option>
      </select>
    </div>
  );
}
