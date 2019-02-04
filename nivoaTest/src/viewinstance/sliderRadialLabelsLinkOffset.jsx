import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsLinkOffset } from "../value/viewinstanceconfig";

const SliderRadialLabelsLinkOffset = ({
  value,
  radialLabelsLinkOffset,
  onChange
}) => (
  <Slider
    value={radialLabelsLinkOffset}
    onInput={onChange}
    {...sliderRadialLabelsLinkOffset}
  />
);

export default SliderRadialLabelsLinkOffset;
