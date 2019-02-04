import React from "react";
import Slider from "../view/slider";
import { sliderRibbonHoverOpacity } from "../value/viewinstanceconfig";

const SliderRibbonHoverOpacity = ({ value, ribbonHoverOpacity, onChange }) => (
  <Slider
    value={ribbonHoverOpacity}
    onInput={onChange}
    {...sliderRibbonHoverOpacity}
  />
);

export default SliderRibbonHoverOpacity;
