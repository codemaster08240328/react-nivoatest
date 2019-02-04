import React from "react";
import { ResponsiveRadar } from "@nivo/radar";

const Radar = ({ data, settings }) => (
  <ResponsiveRadar
    data={data}
    {...settings}
    legends={[
      {
        anchor: "top-left",
        direction: "column",
        translateX: -50,
        translateY: -40,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#999",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000"
            }
          }
        ]
      }
    ]}
  />
);

export default Radar;
