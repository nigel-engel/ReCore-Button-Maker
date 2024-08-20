import React from "react";
import {KeyPairs} from './KeyPairs.jsx';

export default function InputColor({label, id, value, onChange}) {
  return (
    <KeyPairs> 
      <label htmlFor={id}>{label}</label>
      <input 
        type="color" 
        id={id} 
        value={value}
        data-testid="input-color"
        onChange={(e) => onChange(e.target.value)}
      />
    </KeyPairs>
  );
}
