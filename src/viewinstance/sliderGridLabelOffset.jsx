import React from "react";
import Slider from "../view/slider";
import { sliderGridLabelOffset } from "../value/viewinstanceconfig";

const SliderGridLabelOffset = ({ value, gridLabelOffset, onChange }) => (
  <Slider
    value={gridLabelOffset}
    onInput={onChange}
    {...sliderGridLabelOffset}
  />
);

export default SliderGridLabelOffset;
