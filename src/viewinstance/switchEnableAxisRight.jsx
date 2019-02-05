import React from "react";
import Switch from "../view/switch";

const SwitchEnableAxisRight = ({ axisRight, onChange }) => (
  <Switch checked={axisRight} onChange={onChange} {...axisRight} />
);

export default SwitchEnableAxisRight;
