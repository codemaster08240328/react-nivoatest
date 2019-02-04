import React from "react";
import Slider from "../view/slider";
import { sliderinnerRadiusOffset } from "../value/viewinstanceconfig";

const SliderInnerRadiusOffset = ({ value, innerRadiusOffset, onChange }) => (
  <Slider
    value={innerRadiusOffset}
    onInput={onChange}
    {...sliderinnerRadiusOffset}
  />
);

export default SliderInnerRadiusOffset;
