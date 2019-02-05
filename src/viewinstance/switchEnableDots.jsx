import React from "react";
import Switch from "../view/switch";

const SwitchEnableDots = ({ enableDots, onChange }) => (
  <Switch checked={enableDots} onChange={onChange} {...enableDots} />
);

export default SwitchEnableDots;
