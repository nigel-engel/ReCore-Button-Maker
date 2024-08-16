import React from "react";

export default function FontWeight({ fontWeight, label, id, onChange, value }) {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
 
        <option value="300">Light (300)</option>
 
        <option value="500">Medium (500)</option>
 
        <option value="700">Bold (700)</option>
 
      </select>
    </div>
  );
}
