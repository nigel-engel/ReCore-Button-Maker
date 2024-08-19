import React from "react";

export default function InputNumber2({
  id1,
  id2,
  label1,
  label2,
  value1,
  value2,
  onChange1,
  onChange2,
}) {
  const handleFocus = (event) => {
    event.target.select();
  };

  const handleChange = (event, setter) => {
    const value = event.target.value;
    if (value === "" || value.length <= 2) {
      setter(Number(value));
    }
  };

  return (
    <div className="keyPairsGrid">
      <div className="keyPairs">
        <label htmlFor={id1}>{label1}</label>
        <input
          type="number"
          id={id1}
          value={value1}
          onChange={(e) => handleChange(e, onChange1)}
          onFocus={handleFocus}
        />
      </div>
      <div className="keyPairs">
        <label htmlFor={id2}>{label2}</label>
        <input
          type="number"
          id={id2}
          value={value2}
          onChange={(e) => handleChange(e, onChange2)}
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
}
