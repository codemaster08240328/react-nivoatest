import React from "react";
import Slider from "../view/slider";
import { slidercornerRadius } from "../value/viewinstanceconfig";

const SliderCornerRadius = ({ value, cornerRadius, onChange }) => (
  <Slider value={cornerRadius} onInput={onChange} {...slidercornerRadius} />
);

export default SliderCornerRadius;
