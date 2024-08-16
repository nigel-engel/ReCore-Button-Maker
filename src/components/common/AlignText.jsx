import React from "react";

export default function AlignText({ id, label }) {
  return (
    <div className="keyPairs">
      <label htmlFor={id}>{label}</label>
      <div className="keyPairsGrid3" id={id}>
        <button>
          <i className="bi bi-justify-left"></i>
        </button>
        <button>
          <i className="bi bi-justify"></i>
        </button>
        <button>
          <i className="bi bi-justify-right"></i>
        </button>
      </div>
    </div>
  );
}
