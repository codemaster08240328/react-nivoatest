import React from "react";
import SelectMenu from "../view/selectmenu";
import { selectDotLabelTypeConfig } from "../value/viewinstanceconfig";

const SelectDotLabelType = ({ dotLabel, onChange, label }) => (
  <SelectMenu
    value={dotLabel}
    onChange={onChange}
    options={selectDotLabelTypeConfig.dotLabel}
  />
);

export default SelectDotLabelType;
