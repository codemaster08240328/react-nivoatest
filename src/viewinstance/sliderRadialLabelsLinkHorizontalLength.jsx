import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsLinkHorizontalLength } from "../value/viewinstanceconfig";

const SliderRadialLabelsLinkHorizontalLength = ({
  value,
  radialLabelsLinkHorizontalLength,
  onChange
}) => (
  <Slider
    value={radialLabelsLinkHorizontalLength}
    onInput={onChange}
    {...sliderRadialLabelsLinkHorizontalLength}
  />
);

export default SliderRadialLabelsLinkHorizontalLength;
