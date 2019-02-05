import React from "react";
import Slider from "../view/slider";
import { sliderDotBorderWidth } from "../value/viewinstanceconfig";

const SliderDotBorderWidth = ({ value, dotBorderWidth, onChange }) => (
  <Slider value={dotBorderWidth} onInput={onChange} {...sliderDotBorderWidth} />
);

export default SliderDotBorderWidth;
