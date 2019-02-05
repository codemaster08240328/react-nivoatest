import React from "react";
import Slider from "../view/slider";
import { sliderTickSize } from "../value/viewinstanceconfig";

const SliderTickSize = ({ value, tickSize, onChange }) => (
  <Slider value={tickSize} onInput={onChange} {...sliderTickSize} />
);

export default SliderTickSize;
