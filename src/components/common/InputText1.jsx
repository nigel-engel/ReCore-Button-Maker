import React from "react";
import BoldButton from "./BoldButton";

export default function InputText1({
  id,
  label,
  value,
  onChange,
  isBold,
  onBoldToggle,
}) {
  const handleFocus = (event) => {
    event.target.select();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "" || value.length <= 2) {
      onChange(Number(value));
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
          onChange={handleChange}
          onFocus={handleFocus}
        />
      </div>
      <div  >
        <BoldButton
          id="font-weight"
          label="Font Weight"
          isBold={isBold}
          onToggle={onBoldToggle}
        />
      </div>
    </div>
  );
}
