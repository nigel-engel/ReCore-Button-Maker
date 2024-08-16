import React from "react";

export default function InputText1({ id, label }) {
  return (
    <div className="keyPairsGrid">
      <div className="keyPairs">
        <label htmlFor={id}>{label}</label>
        <input type="number" id={id} />
      </div>
      <div className="keyPairs"></div>
    </div>
  );
}
