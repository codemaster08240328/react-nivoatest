import React from "react";
import SelectMenu from "../view/selectmenu";
import { curveConfig } from "../value/viewinstanceconfig";

const SelectCurve = ({ curve, onChange, label }) => (
  <SelectMenu value={curve} onChange={onChange} options={curveConfig.curve} />
);

export default SelectCurve;
