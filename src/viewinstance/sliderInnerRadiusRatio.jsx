import React from "react";
import Slider from "../view/slider";
import { sliderinnerRadiusRatio } from "../value/viewinstanceconfig";

const SliderInnerRadiusRatio = ({ value, innerRadiusRatio, onChange }) => (
  <Slider
    value={innerRadiusRatio}
    onInput={onChange}
    {...sliderinnerRadiusRatio}
  />
);

export default SliderInnerRadiusRatio;
