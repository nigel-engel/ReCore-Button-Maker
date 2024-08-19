import React from "react";

export default function MainButton({ style }) {
  const buttonStyle = {
    padding: `${style.paddingY}px ${style.paddingX}px`,
    border: `${style.borderWidth}px solid ${style.borderColor}`,
    borderRadius: `${style.borderRadius}px`,
    backgroundColor: style.backgroundColor,
    fontSize: `${style.fontSize}px`,
    fontWeight: style.isBold ? 'bold' : 'normal',
    color: style.fontColor,
    // Add other style properties here as needed
  };

  return (
    <div className="main-button">
      <button style={buttonStyle}>{style.buttonText}</button>
    </div>
  );
}