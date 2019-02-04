import React from "react";
import Switch from "../view/switch";

const SwitchEnableAxisLeft = ({ axisLeft, onChange }) => (
  <Switch checked={axisLeft} onChange={onChange} {...axisLeft} />
);

export default SwitchEnableAxisLeft;
