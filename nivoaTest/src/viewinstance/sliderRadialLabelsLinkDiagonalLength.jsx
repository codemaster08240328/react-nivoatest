import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsLinkDiagonalLength } from "../value/viewinstanceconfig";

const SliderRadialLabelsLinkDiagonalLength = ({
  value,
  radialLabelsLinkDiagonalLength,
  onChange
}) => (
  <Slider
    value={radialLabelsLinkDiagonalLength}
    onInput={onChange}
    {...sliderRadialLabelsLinkDiagonalLength}
  />
);

export default SliderRadialLabelsLinkDiagonalLength;
