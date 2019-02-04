import React from "react";
import Slider from "../view/slider";
import { sliderArcBorderWidth } from "../value/viewinstanceconfig";

const SliderArcBorderWidth = ({ value, arcBorderWidth, onChange }) => (
  <Slider value={arcBorderWidth} onInput={onChange} {...sliderArcBorderWidth} />
);

export default SliderArcBorderWidth;
