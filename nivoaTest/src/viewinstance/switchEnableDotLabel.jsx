import React from "react";
import Switch from "../view/switch";

const SwitchEnableDotLabel = ({ enableDotLabel, onChange }) => (
  <Switch checked={enableDotLabel} onChange={onChange} {...enableDotLabel} />
);

export default SwitchEnableDotLabel;
