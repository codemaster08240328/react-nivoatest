import React from "react";
import Switch from "../view/switch";

const SwitchAnimate = ({ animate, onChange }) => (
  <Switch checked={animate} onChange={onChange} {...animate} />
);

export default SwitchAnimate;
