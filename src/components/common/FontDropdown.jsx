import React from "react";

const FontDropdown = ({ id, label, onChange }) => {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="dropdown" name={label} onChange={onChange}>
        <option value="helvetica">Helvetica</option>
        <option value="verdana">Verdana</option>
        <option value="times-new-roman">Times New Roman</option>
        <option value="georgia">Georgia</option>
      </select>
    </div>
  );
};

export default FontDropdown;
