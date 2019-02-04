import React from "react";
import SelectMenu from "../view/selectmenu";
import { dotColorConfig } from "../value/viewinstanceconfig";

const SelectDotColor = ({ dotColor, onChange, label }) => (
  <SelectMenu
    value={dotColor}
    onChange={onChange}
    options={dotColorConfig.dotColor}
  />
);

export default SelectDotColor;
