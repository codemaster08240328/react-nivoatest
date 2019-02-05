import React from "react";
import Slider from "../view/slider";
import { sliderMotionDamping } from "../value/viewinstanceconfig";

const SliderMotionDamping = ({ value, motionDamping, onChange }) => (
  <Slider value={motionDamping} onInput={onChange} {...sliderMotionDamping} />
);

export default SliderMotionDamping;
