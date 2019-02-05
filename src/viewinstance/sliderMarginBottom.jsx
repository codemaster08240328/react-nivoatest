import React from "react";
import Slider from "../view/slider";
import { sliderMarginBottom } from "../value/viewinstanceconfig";

const SliderMarginBottom = ({ value, marginBottom, onChange }) => (
  <Slider value={marginBottom} onInput={onChange} {...sliderMarginBottom} />
);

export default SliderMarginBottom;
