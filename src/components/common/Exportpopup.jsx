import React, { useState } from 'react';

export default function ExportPopup({ isOpen, onClose, embedCode }) {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Export Embed Code</h5>
        </div>
        <div className="modal-body">
          <pre className="embed-code">
            <code>{embedCode}</code>
          </pre>
        </div>
        <div className="modal-footer">
          <button onClick={handleCopy} className="btn btn-primary">
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
          <button onClick={onClose} className="btn btn-secondary">Close</button>
        </div>
      </div>
    </div>
  );
}