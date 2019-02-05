import React from "react";
import Slider from "../view/slider";
import { sliderRibbonOpacity } from "../value/viewinstanceconfig";

const SliderRibbonOpacity = ({ value, ribbonOpacity, onChange }) => (
  <Slider value={ribbonOpacity} onInput={onChange} {...sliderRibbonOpacity} />
);

export default SliderRibbonOpacity;
