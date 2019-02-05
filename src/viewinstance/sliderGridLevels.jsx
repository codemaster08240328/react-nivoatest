import React from "react";
import Slider from "../view/slider";
import { sliderGridLevels } from "../value/viewinstanceconfig";

const SliderGridLevels = ({ value, gridLevels, onChange }) => (
  <Slider value={gridLevels} onInput={onChange} {...sliderGridLevels} />
);

export default SliderGridLevels;
