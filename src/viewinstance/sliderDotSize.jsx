import React from "react";
import Slider from "../view/slider";
import { sliderDotSize } from "../value/viewinstanceconfig";

const SliderDotSize = ({ value, dotSize, onChange }) => (
  <Slider value={dotSize} onInput={onChange} {...sliderDotSize} />
);

export default SliderDotSize;
