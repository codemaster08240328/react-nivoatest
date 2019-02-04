import React from "react";
import { Slider as RMWCSlider } from "@rmwc/slider";

const Slider = ({
  onInput,
  value,
  min,
  max,
  step,
  discrete,
  displayMarkers,
  disabled
}) => (
  <RMWCSlider
    // onChange={evt => this.setState({ sliderValue2: evt.detail.value })}
    onInput={evt => onInput(evt.target.value)}
    value={value}
    min={min}
    max={max}
    step={step}
    discrete={discrete}
    displayMarkers={displayMarkers}
    disabled={disabled}
  />
);

export default Slider;
