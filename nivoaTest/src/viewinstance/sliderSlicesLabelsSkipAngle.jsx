import React from "react";
import Slider from "../view/slider";
import { sliderSlicesLabelsSkipAngle } from "../value/viewinstanceconfig";

const SliderSlicesLabelsSkipAngle = ({
  value,
  slicesLabelsSkipAngle,
  onChange
}) => (
  <Slider
    value={slicesLabelsSkipAngle}
    onInput={onChange}
    {...sliderSlicesLabelsSkipAngle}
  />
);

export default SliderSlicesLabelsSkipAngle;
