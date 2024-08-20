import React, { useState } from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import ExportPopup from "../common/ExportPopup";
import { generateEmbedCode } from "../../components/common/generateEmbedCode";

export default function Navbar({ buttonStyle }) {
  console.log("Navbar received buttonStyle:", buttonStyle);

  const [isExportPopupOpen, setIsExportPopupOpen] = useState(false);

  const handleExportClick = () => {
    setIsExportPopupOpen(true);
  };

  const embedCode = generateEmbedCode(buttonStyle);
  console.log("Embed code generated:", embedCode);

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