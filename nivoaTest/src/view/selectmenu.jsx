import React from "react";
import { Select as RMWCSelect } from "@rmwc/select";

const SelectMenu = ({
  value,
  options,
  label,
  placeholder,
  outlined,
  disabled,
  rootProps,
  className,
  style,
  onChange
}) => (
  <RMWCSelect
    value={value}
    options={options}
    label={label}
    placeholder={placeholder}
    outlined={outlined}
    disabled={disabled}
    rootProps={rootProps}
    className={className}
    style={style}
    onChange={evt => onChange(evt.target.value)}
  />
);

export default SelectMenu;
