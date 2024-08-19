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
    fontFamily: style.fontFamily,
  };

  return (
    <div className="main-button">
      <button style={buttonStyle}>{style.buttonText}</button>
    </div>
  );
}