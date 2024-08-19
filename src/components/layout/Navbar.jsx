import React from "react";
import Logo from "../common/Logo";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Logo />
        <Button text="Export" />
      </div>
    </>
  );
}
