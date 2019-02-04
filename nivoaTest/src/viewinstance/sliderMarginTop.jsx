import React from "react";
import Slider from "../view/slider";
import { sliderMarginTop } from "../value/viewinstanceconfig";

const SliderMarginTop = ({ value, marginTop, onChange }) => (
  <Slider value={marginTop} onInput={onChange} {...sliderMarginTop} />
);

export default SliderMarginTop;
