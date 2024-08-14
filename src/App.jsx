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
            <label htmlFor="button-color">Button Color</label>
            <input
              type="color"
              id="button-color"
              placeholder="call-to-action "
            />
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
          <div className="keyPairsGrid">
            <div className="keyPairs">
              <label htmlFor="border-width">Border Width</label>
              <input type="number" id="border-width" />
            </div>
            <div className="keyPairs">
              <label htmlFor="border-radius">Button Radius</label>
              <input type="number" id="border-radius" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <h2>Typography</h2>
          <div className="keyPairs">
            <label htmlFor="font-select dropdown">Font</label>
            <select id="font-select" className="dropdown" name="font">
              <option value="arial">Arial</option>
              <option value="helvetica">Helvetica</option>
              <option value="verdana">Verdana</option>
              <option value="times-new-roman">Times New Roman</option>
              <option value="georgia">Georgia</option>
              <option value="courier-new">Courier New</option>
              <option value="trebuchet-ms">Trebuchet MS</option>
            </select>
          </div>
          <div className="keyPairs">
            <label htmlFor="font-weight-select">Font Weight</label>
            <select
              id="font-weight-select"
              className="dropdown"
              name="font-weight"
            >
              <option value="100">Thin (100)</option>
              <option value="200">Extra Light (200)</option>
              <option value="300">Light (300)</option>
              <option value="400">Normal (400)</option>
              <option value="500">Medium (500)</option>
              <option value="600">Semi Bold (600)</option>
              <option value="700">Bold (700)</option>
              <option value="800">Extra Bold (800)</option>
              <option value="900">Black (900)</option>
            </select>
          </div>
          <div className="keyPairs">
            <label htmlFor="font-color">Font Color</label>
            <input type="color" id="font-color" placeholder="call-to-action " />
          </div>
          <div className="keyPairsGrid">
            <div className="keyPairs">
              <label htmlFor="font-size">Font Size</label>
              <input type="number" id="font-size" />
            </div>
            <div className="keyPairs"></div>
          </div>
          <div className="keyPairs">
            <label htmlFor="font-color">Align Text</label>
            <div className="keyPairsGrid3">
              <button>
                <i class="bi bi-justify-left"></i>
              </button>
              <button>
                <i class="bi bi-justify-left"></i>
              </button>
              <button>
                <i class="bi bi-justify-left"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="grid-background app-body">
          <button>hello</button>
        </div>
      </div>
    </>
  );
}
