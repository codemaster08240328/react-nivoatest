import React from "react";
import Switch from "../view/switch";

const SwitchEnableGridX = ({ enableGridX, onChange }) => (
  <Switch checked={enableGridX} onChange={onChange} {...enableGridX} />
);

export default SwitchEnableGridX;
