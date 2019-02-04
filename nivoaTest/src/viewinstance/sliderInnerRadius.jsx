import React from "react";
import Slider from "../view/slider";
import { sliderinnerRadius } from "../value/viewinstanceconfig";

const SliderInnerRadius = ({ value, innerRadius, onChange }) => (
  <Slider value={innerRadius} onInput={onChange} {...sliderinnerRadius} />
);

export default SliderInnerRadius;
