import React from "react";
import Slider from "../view/slider";
import { sliderpadAngle } from "../value/viewinstanceconfig";

const SliderPadAngle = ({ value, padAngle, onChange }) => (
  <Slider value={padAngle} onInput={onChange} {...sliderpadAngle} />
);

export default SliderPadAngle;
