import React from "react";

export default function MainButton({ text, style }) {
  const buttonStyle = {
    padding: `${style.paddingY}px ${style.paddingX}px`,
    border: `${style.borderWidth}px solid ${style.borderColor}`,
    borderWidth: `${style.borderWidth}px`,
    borderRadius: `${style.borderRadius}px`,
    backgroundColor: `${style.backgroundColor}`,
    borderColor: `${style.borderColor}`,
    // Add other style properties here as needed
  };

  return (
    <div className="main-button">
      <button style={buttonStyle}>{text}</button>
    </div>
  );
}
