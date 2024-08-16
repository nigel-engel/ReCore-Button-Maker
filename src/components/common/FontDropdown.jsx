import React from "react";

const FontDropdown = ({id, label}) => {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <select id={id} className="dropdown" name={label}>
        <option value="arial">Arial</option>
        <option value="helvetica">Helvetica</option>
        <option value="verdana">Verdana</option>
        <option value="times-new-roman">Times New Roman</option>
        <option value="georgia">Georgia</option>
        <option value="courier-new">Courier New</option>
        <option value="trebuchet-ms">Trebuchet MS</option>
      </select>
    </div>
  );
};

export default FontDropdown;
