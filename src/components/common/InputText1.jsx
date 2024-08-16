import React from "react";

export default function InputText1({ 
  id, 
  label,
  value,
  onChange
}) {

  const handleFocus = (event) => {
    event.target.select();
  };

  const handleChange = (event, setter) => {
    const value = event.target.value;
    if (value === "" || value.length <= 3) {
      setter(Number(value));
    }
  };

  return (
    <div className="keyPairsGrid">
      <div className="keyPairs">
        <label htmlFor={id}>{label}</label>
        <input 
        type="number" 
        id={id}
        value={value}
        onChange={(e) => handleChange(e, onChange)}
        onFocus={handleFocus} />
      </div>
      <div className="keyPairs"></div>
    </div>
  );
}
