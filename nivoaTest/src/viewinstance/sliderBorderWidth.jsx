import React from "react";
import Slider from "../view/slider";
import { sliderBorderWidth } from "../value/viewinstanceconfig";

const SliderBorderWidth = ({ value, borderWidth, onChange }) => (
  <Slider value={borderWidth} onInput={onChange} {...sliderBorderWidth} />
);

export default SliderBorderWidth;
