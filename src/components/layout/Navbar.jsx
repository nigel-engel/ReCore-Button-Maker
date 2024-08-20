import React, { useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import ExportPopup from "../common/ExportPopup";
import { generateEmbedCode } from "../../components/common/generateEmbedCode";

export default function Navbar({ buttonStyle }) {

  const [isExportPopupOpen, setIsExportPopupOpen] = useState(false);

  const handleExportClick = () => {
    setIsExportPopupOpen(true);
  };

  const embedCode = generateEmbedCode(buttonStyle);

  return (
    <>
      <div className="navbar">
        <Logo />
        <Button text="Export" onClick={handleExportClick} />
      </div>
      <ExportPopup
        isOpen={isExportPopupOpen}
        onClose={() => setIsExportPopupOpen(false)}
        embedCode={embedCode}
      />
    </>
  );
}