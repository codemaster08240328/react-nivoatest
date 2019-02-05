import React from "react";
import Switch from "../view/switch";

const SwitchEnableAxisBottom = ({ axisBottom, onChange }) => (
  <Switch checked={axisBottom} onChange={onChange} {...axisBottom} />
);

export default SwitchEnableAxisBottom;
