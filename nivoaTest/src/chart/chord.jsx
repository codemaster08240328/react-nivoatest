import React from "react";
import { ResponsiveChord } from "@nivo/chord";

const Chord = ({ data, settings }) => (
  <ResponsiveChord
    data={data}
    {...settings}
    matrix={[
      [230, 431, 316, 308, 136],
      [140, 320, 1952, 1583, 358],
      [1472, 127, 1963, 280, 1072],
      [905, 230, 1068, 18, 966],
      [1845, 351, 100, 1717, 283]
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        translateY: 70,
        itemWidth: 80,
        itemHeight: 14,
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

export default Chord;
