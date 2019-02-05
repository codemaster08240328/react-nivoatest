import React from "react";
import Slider from "../view/slider";
import { sliderDotLabelYOffset } from "../value/viewinstanceconfig";

const SliderDotLabelYOffset = ({ value, dotLabelYOffset, onChange }) => (
  <Slider
    value={dotLabelYOffset}
    onInput={onChange}
    {...sliderDotLabelYOffset}
  />
);

export default SliderDotLabelYOffset;
