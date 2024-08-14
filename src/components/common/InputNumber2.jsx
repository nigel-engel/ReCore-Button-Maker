import React from "react";

export default function InputNumber2({id1, id2, label1, label2}) {
  return (
    <div className="keyPairsGrid">
      <div className="keyPairs">
        <label htmlFor={id1}>{label1}</label>
        <input type="number" id={id1} />
      </div>
      <div className="keyPairs">
        <label htmlFor={id2}>{label2}</label>
        <input type="number" id={id2} />
      </div>
    </div>
  );
}
