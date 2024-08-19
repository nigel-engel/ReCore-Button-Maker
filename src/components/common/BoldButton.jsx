import React from "react";

export default function BoldButton({ id, label, isBold, onToggle }) {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <button 
        id={id} 
        onClick={onToggle} 
        data-bold={isBold}
      >
        {isBold ? 'B' : 'B'}
      </button>
    </div>
  );
}