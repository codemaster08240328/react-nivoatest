import React from "react";
import Slider from "../view/slider";
import { sliderMotionStiffness } from "../value/viewinstanceconfig";

const SliderMotionStiffness = ({ value, motionStiffness, onChange }) => (
  <Slider
    value={motionStiffness}
    onInput={onChange}
    {...sliderMotionStiffness}
  />
);

export default SliderMotionStiffness;
