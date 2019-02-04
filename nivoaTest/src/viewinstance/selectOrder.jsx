import React from "react";
import SelectMenu from "../view/selectmenu";
import { orderConfig } from "../value/viewinstanceconfig";

const SelectOrder = ({ order, onChange, label }) => (
  <SelectMenu value={order} onChange={onChange} options={orderConfig.order} />
);

export default SelectOrder;
