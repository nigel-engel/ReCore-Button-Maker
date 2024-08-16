import React, { useState } from "react";
import Title from "../common/Title";
import InputColor from "../common/InputColor";
import InputNumber2 from "../common/InputNumber2";
import MenuDivider from "../common/MenuDivider";
import FontDropdown from "../common/FontDropdown";
import FontWeight from "../common/FontWeight";
import AlignText from "../common/AlignText";
import InputText1 from "../common/InputText1";
import BodyGrid from "../common/BodyGrid";

export default function Body() {
  const [buttonStyle, setButtonStyle] = useState({
    paddingX: 10,
    paddingY: 5,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 4,
    backgroundColor: "#ffffff",
  });

  const handleStyleChange = (property, value) => {
    setButtonStyle((prevStyle) => ({
      ...prevStyle,
      [property]: value,
    }));
  };

  return (
    <div className="body">
      <div className="menu">
        <Title text="Properties" />
        <InputColor 
        label="Button Color" 
        id="button-color" 
        value={buttonStyle.backgroundColor} 
        onChange={(value) => handleStyleChange("backgroundColor", value)}/>
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
          onChange1={(value) => handleStyleChange("borderWidth", Number(value))}
          onChange2={(value) => handleStyleChange("borderRadius", Number(value))
          }
        />
        <InputColor 
        label="Border Color" 
        id="border-color" 
        value={buttonStyle.backgroundColor}
        onChange={(value) => handleStyleChange("borderColor", value)}
        />
        <MenuDivider />
        <Title text="Typography" />
        <InputText1 label="Font Size" id="font-size" />
        <FontDropdown id="font-family" label="Font Family" />
        <FontWeight id="fontWeight" label="Font Weight" />
        <InputColor label="Font Color" id="font-color" />
        <AlignText label="Align Text" id="align-text" />
      </div>

      <BodyGrid buttonStyle={buttonStyle} />
    </div>
  );
}
