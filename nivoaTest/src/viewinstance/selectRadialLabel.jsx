import React from "react";
import SelectMenu from "../view/selectmenu";
import { selectRadialLabelsConfig } from "../value/viewinstanceconfig";

const SelectRadialLabel = ({ selectRadialLabels, onChange, label }) => (
  <SelectMenu
    value={selectRadialLabels}
    onChange={onChange}
    options={selectRadialLabelsConfig.selectRadialLabels}
  />
);

export default SelectRadialLabel;
