import React from "react";
import Slider from "../view/slider";
import { sliderpadAngleSmall } from "../value/viewinstanceconfig";

const SliderPadAngleSmall = ({ value, padAngle, onChange }) => (
  <Slider value={padAngle} onInput={onChange} {...sliderpadAngleSmall} />
);

export default SliderPadAngleSmall;
