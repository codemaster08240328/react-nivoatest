import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsLinkStrokeWidth } from "../value/viewinstanceconfig";

const SliderRadialLabelsLinkStrokeWidth = ({
  value,
  radialLabelsLinkStrokeWidth,
  onChange
}) => (
  <Slider
    value={radialLabelsLinkStrokeWidth}
    onInput={onChange}
    {...sliderRadialLabelsLinkStrokeWidth}
  />
);

export default SliderRadialLabelsLinkStrokeWidth;
