import React from "react";
import Slider from "../view/slider";
import { sliderArcOpacity } from "../value/viewinstanceconfig";

const SliderArcOpacity = ({ value, arcOpacity, onChange }) => (
  <Slider value={arcOpacity} onInput={onChange} {...sliderArcOpacity} />
);

export default SliderArcOpacity;
