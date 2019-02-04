import React from "react";
import SelectMenu from "../view/selectmenu";
import { offsetTypeConfig } from "../value/viewinstanceconfig";

const SelectOffsetType = ({ offsetType, onChange, label }) => (
  <SelectMenu
    value={offsetType}
    onChange={onChange}
    options={offsetTypeConfig.offsetType}
  />
);

export default SelectOffsetType;
