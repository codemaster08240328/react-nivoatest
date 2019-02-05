import React from "react";
import SelectMenu from "../view/selectmenu";
import { sliceLabelConfig } from "../value/viewinstanceconfig";

const SelectSliceLabel = ({ sliceLabel, onChange, label }) => (
  <SelectMenu
    value={sliceLabel}
    onChange={onChange}
    options={sliceLabelConfig.labelOptions}
  />
);

export default SelectSliceLabel;
