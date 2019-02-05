import React from "react";
import Slider from "../view/slider";
import { sliderArcHoverOthersOpacity } from "../value/viewinstanceconfig";

const SliderArcHoverOthersOpacity = ({
  value,
  arcHoverOthersOpacity,
  onChange
}) => (
  <Slider
    value={arcHoverOthersOpacity}
    onInput={onChange}
    {...sliderArcHoverOthersOpacity}
  />
);

export default SliderArcHoverOthersOpacity;
