import React from "react";
import Slider from "../view/slider";
import { sliderMarginLeft } from "../value/viewinstanceconfig";

const SliderMarginLeft = ({ value, marginLeft, onChange }) => (
  <Slider value={marginLeft} onInput={onChange} {...sliderMarginLeft} />
);

export default SliderMarginLeft;
