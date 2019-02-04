import React from "react";
import Slider from "../view/slider";
import { sliderRibbonBorderWidth } from "../value/viewinstanceconfig";

const SliderRibbonBorderWidth = ({ value, ribbonBorderWidth, onChange }) => (
  <Slider
    value={ribbonBorderWidth}
    onInput={onChange}
    {...sliderRibbonBorderWidth}
  />
);

export default SliderRibbonBorderWidth;
