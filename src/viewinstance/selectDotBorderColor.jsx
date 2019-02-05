import React from "react";
import SelectMenu from "../view/selectmenu";
import { dotBorderColorConfig } from "../value/viewinstanceconfig";

const SelectDotBorderColor = ({ dotBorderColor, onChange, label }) => (
  <SelectMenu
    value={dotBorderColor}
    onChange={onChange}
    options={dotBorderColorConfig.dotBorderColor}
  />
);

export default SelectDotBorderColor;
