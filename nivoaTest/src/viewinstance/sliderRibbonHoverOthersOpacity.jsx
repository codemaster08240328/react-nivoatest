import React from "react";
import Slider from "../view/slider";
import { sliderRibbonHoverOthersOpacity } from "../value/viewinstanceconfig";

const SliderRibbonHoverOthersOpacity = ({
  value,
  ribbonHoverOthersOpacity,
  onChange
}) => (
  <Slider
    value={ribbonHoverOthersOpacity}
    onInput={onChange}
    {...sliderRibbonHoverOthersOpacity}
  />
);

export default SliderRibbonHoverOthersOpacity;
