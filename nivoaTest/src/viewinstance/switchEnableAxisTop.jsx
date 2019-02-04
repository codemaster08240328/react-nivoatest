import React from "react";
import Switch from "../view/switch";

const SwitchEnableAxisTop = ({ axisTop, onChange }) => (
  <Switch checked={axisTop} onChange={onChange} {...axisTop} />
);

export default SwitchEnableAxisTop;
