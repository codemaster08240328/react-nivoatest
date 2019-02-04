import React from "react";
import SelectMenu from "../view/selectmenu";
import { colorsConfig } from "../value/viewinstanceconfig";

const SelectColors = ({ colors, onChange, label }) => (
  <SelectMenu
    value={colors}
    onChange={onChange}
    options={colorsConfig.colors}
  />
);

export default SelectColors;
