import React from "react";
import Slider from "../view/slider";
import { sliderRadialLabelsTextOffset } from "../value/viewinstanceconfig";

const SliderRadialLabelsTextOffset = ({
  value,
  radialLabelsTextOffset,
  onChange
}) => (
  <Slider
    value={radialLabelsTextOffset}
    onInput={onChange}
    {...sliderRadialLabelsTextOffset}
  />
);

export default SliderRadialLabelsTextOffset;
