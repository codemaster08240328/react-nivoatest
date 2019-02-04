import React from "react";
import SelectMenu from "../view/selectmenu";
import { arcBorderColorConfig } from "../value/viewinstanceconfig";

const SelectArcBorderColor = ({ arcBorderColor, onChange, label }) => (
  <SelectMenu
    value={arcBorderColor}
    onChange={onChange}
    options={arcBorderColorConfig.arcBorderColor}
  />
);

export default SelectArcBorderColor;
