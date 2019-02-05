import React from "react";
import SelectMenu from "../view/selectmenu";
import { styleConfig } from "../value/viewinstanceconfig";

const SelectColorBy = ({ colorBy, onChange, label }) => (
  <SelectMenu
    value={colorBy}
    onChange={onChange}
    options={styleConfig.colorOptions}
  />
);

export default SelectColorBy;
