import React from "react";
import { Switch as RMWCSwitch } from "@rmwc/switch";

const Switch = ({
  id,
  disabled,
  checked,
  label,
  rootProps,
  children,
  onChange
}) => (
  <RMWCSwitch
    id={id}
    disabled={disabled}
    checked={checked}
    label={label}
    rootProps={rootProps}
    children={children}
    onChange={evt => onChange(evt.target.checked)}
  />
);

export default Switch;
