import React from "react";
import Slider from "../view/slider";
import { sliderLabelOffset } from "../value/viewinstanceconfig";

const SliderLabelOffset = ({ value, labelOffset, onChange }) => (
  <Slider value={labelOffset} onInput={onChange} {...sliderLabelOffset} />
);

export default SliderLabelOffset;
