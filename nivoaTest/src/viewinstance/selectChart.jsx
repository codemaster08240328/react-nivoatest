import React from "react";
import SelectMenu from "../view/selectmenu";
import { displayConfig } from "../value/viewinstanceconfig";

const SelectChart = ({ display, onChange, label }) => (
  <SelectMenu
    value={display}
    onChange={onChange}
    options={displayConfig.display}
  />
);

export default SelectChart;
