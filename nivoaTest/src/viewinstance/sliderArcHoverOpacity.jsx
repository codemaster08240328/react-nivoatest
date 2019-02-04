import React from "react";
import Slider from "../view/slider";
import { sliderArcHoverOpacity } from "../value/viewinstanceconfig";

const SliderArcHoverOpacity = ({ value, arcHoverOpacity, onChange }) => (
  <Slider
    value={arcHoverOpacity}
    onInput={onChange}
    {...sliderArcHoverOpacity}
  />
);

export default SliderArcHoverOpacity;
