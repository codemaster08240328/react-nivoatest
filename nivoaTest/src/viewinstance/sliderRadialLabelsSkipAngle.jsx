import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsSkipAngle } from "../value/viewinstanceconfig";

const SliderRadialLabelsSkipAngle = ({
  value,
  radialLabelsSkipAngle,
  onChange
}) => (
  <Slider
    value={radialLabelsSkipAngle}
    onInput={onChange}
    {...sliderRadialLabelsSkipAngle}
  />
);

export default SliderRadialLabelsSkipAngle;
