import React from "react";
import SelectMenu from "../view/selectmenu";
import { ribbonBorderColorConfig } from "../value/viewinstanceconfig";

const SelectRibbonBorderColor = ({ ribbonBorderColor, onChange, label }) => (
  <SelectMenu
    value={ribbonBorderColor}
    onChange={onChange}
    options={ribbonBorderColorConfig.ribbonBorderColor}
  />
);

export default SelectRibbonBorderColor;
