import React from "react";

export default function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="/assets/recore-icon-logo-white.png"
            id="logo-img"
            width="32px"
          />
          <h1>Button Maker</h1>
        </div>
        <button>Export</button>
      </div>
      <div className="grid">
        <div className="menu">
          <h2>Properties</h2>
          <div className="keyPairs">
            <label htmlFor="button-text">Button Text</label>
            <input type="text" id="button-text" placeholder="call-to-action " />
          </div>
          <div className="keyPairs">
            <label htmlFor="button-color">Button Color</label>
            <input type="color" id="button-color" placeholder="call-to-action " />
          </div>
          <div className="keyPairsGrid">
            <div className="keyPairs">
              <label htmlFor="padding-x">Padding x</label>
              <input type="number" id="padding-x" />
            </div>
            <div className="keyPairs">
              <label htmlFor="padding-y">Padding y</label>
              <input type="number" id="padding-y" />
            </div>
          </div>
          <div className="">
            <input type="checkbox" id="button-border" />
            <label htmlFor="button-border">Border</label>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
