import React from "react";
import Slider from "../view/slider";
import { sliderMarginRight } from "../value/viewinstanceconfig";

const SliderMarginRight = ({ value, marginRight, onChange }) => (
  <Slider value={marginRight} onInput={onChange} {...sliderMarginRight} />
);

export default SliderMarginRight;
