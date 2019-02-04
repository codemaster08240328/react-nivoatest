import React from "react";
import SelectMenu from "../view/selectmenu";
import { curveExtendedConfig } from "../value/viewinstanceconfig";

const SelectCurveExtended = ({ curveExtended, onChange, label }) => (
  <SelectMenu
    value={curveExtended}
    onChange={onChange}
    options={curveExtendedConfig.curveExtended}
  />
);

export default SelectCurveExtended;
