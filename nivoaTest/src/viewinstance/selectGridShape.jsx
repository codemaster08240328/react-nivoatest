import React from "react";
import SelectMenu from "../view/selectmenu";
import { gridShapeConfig } from "../value/viewinstanceconfig";

const SelectGridShape = ({ gridShape, onChange, label }) => (
  <SelectMenu
    value={gridShape}
    onChange={onChange}
    options={gridShapeConfig.gridShape}
  />
);

export default SelectGridShape;
