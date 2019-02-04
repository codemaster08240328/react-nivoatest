import React from "react";
import Slider from "../view/slider";
import { sliderendAngle } from "../value/viewinstanceconfig";

const SliderEndAngle = ({ value, endAngle, onChange }) => (
  <Slider value={endAngle} onInput={onChange} {...sliderendAngle} />
);

export default SliderEndAngle;
