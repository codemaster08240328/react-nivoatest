import React from "react";
import Slider from "../view/slider";
import { sliderFillOpacity } from "../value/viewinstanceconfig";

const SliderFillOpacity = ({ value, fillOpacity, onChange }) => (
  <Slider value={fillOpacity} onInput={onChange} {...sliderFillOpacity} />
);

export default SliderFillOpacity;
