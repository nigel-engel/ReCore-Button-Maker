import React, { useState } from "react";
import Title from "../common/Title";
import InputColor from "../common/InputColor";
import InputNumber2 from "../common/InputNumber2";
import FontDropdown from "../common/FontDropdown";
import InputText1 from "../common/InputText1";
import BodyGrid from "../common/BodyGrid";
import ButtonTextInput from "../common/ButtonTextInput";
import Navbar from "./Navbar";

export default function Body() {
  const [buttonStyle, setButtonStyle] = useState({
    paddingX: 30,
    paddingY: 15,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 4,
    backgroundColor: "#0550ae",
    fontSize: 20,
    fontColor: "#f6f8fa",
    isBold: false,
    buttonText: "Click me",
    fontFamily: "Helvetica",
  });

  const handleStyleChange = (property, value) => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      [property]: value,
    }));
  };

  const handleBoldToggle = () => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      isBold: !prevStyle.isBold,
    }));
  };

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      fontFamily: selectedFont,
    }));
  };

  return (
    <>
      <Navbar buttonStyle={buttonStyle} />
      <div className="body">
        <div className="menu">
          <Title text="Properties" />
          <InputColor
            label="Button Color"
            id="button-color"
            value={buttonStyle.backgroundColor}
            onChange={(value) => handleStyleChange("backgroundColor", value)}
          />
          <InputNumber2
            id1="padding-x"
            id2="padding-y"
            label1="Padding x"
            label2="Padding y"
            value1={buttonStyle.paddingX}
            value2={buttonStyle.paddingY}
            onChange1={(value) => handleStyleChange("paddingX", Number(value))}
            onChange2={(value) => handleStyleChange("paddingY", Number(value))}
          />
          <InputNumber2
            id1="border-width"
            id2="button-radius"
            label1="Border Width"
            label2="Button Radius"
            value1={buttonStyle.borderWidth}
            value2={buttonStyle.borderRadius}
            onChange1={(value) =>
              handleStyleChange("borderWidth", Number(value))
            }
            onChange2={(value) =>
              handleStyleChange("borderRadius", Number(value))
            }
          />
          <InputColor
            label="Border Color"
            id="border-color"
            value={buttonStyle.borderColor}
            onChange={(value) => handleStyleChange("borderColor", value)}
          />
          <Title text="Typography" />
          <ButtonTextInput
            label="Button Text"
            initialText={buttonStyle.buttonText}
            onTextChange={(text) => handleStyleChange("buttonText", text)}
          />
          <InputText1
            label="Font Size"
            id="font-size"
            value={buttonStyle.fontSize}
            onChange={(value) => handleStyleChange("fontSize", Number(value))}
            isBold={buttonStyle.isBold}
            onBoldToggle={handleBoldToggle}
          />
          <FontDropdown
            id="font-family"
            label="Font Family"
            onChange={handleFontChange}
          />
          <InputColor
            label="Font Color"
            id="font-color"
            value={buttonStyle.fontColor}
            onChange={(value) => handleStyleChange("fontColor", value)}
          />
        </div>

        <BodyGrid buttonStyle={buttonStyle} />
      </div>
    </>
  );
}
