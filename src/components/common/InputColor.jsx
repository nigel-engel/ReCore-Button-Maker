import React from "react";

export default function InputColor({label, id, value, onChange}) {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <input 
        type="color" 
        id={id} 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}