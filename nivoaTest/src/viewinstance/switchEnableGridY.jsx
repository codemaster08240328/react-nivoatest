import React from "react";
import Switch from "../view/switch";

const SwitchEnableGridY = ({ enableGridY, onChange }) => (
  <Switch checked={enableGridY} onChange={onChange} {...enableGridY} />
);

export default SwitchEnableGridY;
