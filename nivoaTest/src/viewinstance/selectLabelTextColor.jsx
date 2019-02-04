import React from "react";
import SelectMenu from "../view/selectmenu";
import { labelTextColorConfig } from "../value/viewinstanceconfig";

const SelectLabelTextColor = ({ labelTextColor, onChange, label }) => (
  <SelectMenu
    value={labelTextColor}
    onChange={onChange}
    options={labelTextColorConfig.labelTextColor}
  />
);

export default SelectLabelTextColor;
