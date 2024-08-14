import React from "react";
import Title from "../common/Title";
import InputColor from "../common/InputColor";
import InputNumber2 from "../common/InputNumber2";
import MenuDivider from "../common/MenuDivider";

export default function Body() {
  return (
    <div className="body">
      <div className="menu">
        <Title text="Properties" />
        <InputColor label="Button Color" id="button-color" />
        <InputNumber2
          id1="padding-x"
          id2="padding-y"
          label1="Padding x"
          label2="Padding y"
        />
        <InputNumber2
          id1="border-width"
          id2="button-radius"
          label1="Border Width"
          label2="Button Radius"
        />
        <InputNumber2
          id1="border-width"
          id2="button-radius"
          label1="Border Width"
          label2="Button Radius"
        />
        <MenuDivider />
        <Title text="Typography" />
      </div>
    </div>
  );
}
