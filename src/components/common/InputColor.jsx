import React from "react";
import Title from "./Title";

export default function InputColor({label, id}) {
  return (
    <div className="keyPairs">
      <label htmlFor="{id}">{label}</label>
      <input type="color" id={id} />
    </div>
  );
}
