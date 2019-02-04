import React from "react";
import SelectMenu from "../view/selectmenu";
import { borderColorConfig } from "../value/viewinstanceconfig";

const SelectBorderColor = ({ borderColor, onChange, label }) => (
  <SelectMenu
    value={borderColor}
    onChange={onChange}
    options={borderColorConfig.borderColor}
  />
);

export default SelectBorderColor;
