import React from "react";
import Slider from "../view/slider";
import { sliderLabelRotation } from "../value/viewinstanceconfig";

const SliderLabelRotation = ({ value, labelRotation, onChange }) => (
  <Slider value={labelRotation} onInput={onChange} {...sliderLabelRotation} />
);

export default SliderLabelRotation;
