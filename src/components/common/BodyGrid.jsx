import React from "react";
import MainButton from "./MainButton";

export default function BodyGrid({ buttonStyle }) {
  return (
    <div className="grid-background app-body">
      <MainButton text={buttonStyle.buttonText} style={buttonStyle} />
    </div>
  );
}