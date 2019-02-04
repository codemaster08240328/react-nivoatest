import React from "react";
import SelectMenu from "../view/selectmenu";
import { selectLabelsConfig } from "../value/viewinstanceconfig";

const SelectLabels = ({ selectLabels, onChange, label }) => (
  <SelectMenu
    value={selectLabels}
    onChange={onChange}
    options={selectLabelsConfig.selectLabels}
  />
);

export default SelectLabels;
