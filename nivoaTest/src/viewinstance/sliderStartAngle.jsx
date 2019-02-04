import React from "react";
import Slider from "../view/slider";
import { sliderstartAngle } from "../value/viewinstanceconfig";

const SliderStartAngle = ({ value, startAngle, onChange }) => (
  <Slider value={startAngle} onInput={onChange} {...sliderstartAngle} />
);

export default SliderStartAngle;
