import React from "react";
import "./styles.css";
import "./var.css";

export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo-container">
        <img
          src="/assets/recore-icon-logo-white.png"
          alt="ReCore logo"
          className="logo"
        />
        <h1>Button Maker</h1>
        </div>
        <button>Export</button>
      </div>
    </>
  );
}
