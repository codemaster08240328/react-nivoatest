import React from "react";
import { TabBar, Tab } from "@rmwc/tabs";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

import "@material/slider/dist/mdc.slider.css";

import "@material/select/dist/mdc.select.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

import "@material/switch/dist/mdc.switch.css";
import "@material/form-field/dist/mdc.form-field.css";
// import SwitchEnableRadialLabels from "../viewinstance/switchEnableRadialLabels";
import SliderStartAngle from "../viewinstance/sliderStartAngle";
import SliderEndAngle from "../viewinstance/sliderEndAngle";
import SliderInnerRadius from "../viewinstance/sliderInnerRadius";
import SliderPadAngle from "../viewinstance/sliderPadAngle";
import SliderCornerRadius from "../viewinstance/sliderCornerRadius";
import SelectColors from "../viewinstance/selectColors";
import SelectColorBy from "../viewinstance/selectColorBy";
import SliderBorderWidth from "../viewinstance/sliderBorderWidth";
import SliderMarginTop from "../viewinstance/sliderMarginTop";
import SliderMarginBottom from "../viewinstance/sliderMarginBottom";
import SliderMarginLeft from "../viewinstance/sliderMarginLeft";
import SliderMarginRight from "../viewinstance/sliderMarginRight";
import SelectRadialLabel from "../viewinstance/selectRadialLabel";
import SliderRadialLabelsSkipAngle from "../viewinstance/sliderRadialLabelsSkipAngle";
import SliderRadialLabelsLinkOffset from "../viewinstance/sliderRadialLabelsLinkOffset";
import SliderRadialLabelsLinkDiagonalLength from "../viewinstance/sliderRadialLabelsLinkDiagonalLength";
import SliderRadialLabelsLinkHorizontalLength from "../viewinstance/sliderRadialLabelsLinkHorizontalLength";
import SliderRadialLabelsTextOffset from "../viewinstance/sliderRadialLabelsTextOffset";
import SliderRadialLabelsLinkStrokeWidth from "../viewinstance/sliderRadialLabelsLinkStrokeWidth";
// import SwitchEnableSlicesLabels from "../viewinstance/switchEnableSlicesLabels";
import SelectSliceLabel from "../viewinstance/selectSliceLabel";
import SliderSlicesLabelsSkipAngle from "../viewinstance/sliderSlicesLabelsSkipAngle";
// import SwitchIsInteractive from "../viewinstance/switchIsInteractive";

export default class SidebarPie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    let { settings } = this.props;
    let { activeTab } = this.state;

    return (
      <nav className="sidebar">
        <TabBar
          activeTabIndex={activeTab}
          onActivate={evt => this.setState({ activeTab: evt.detail.index })}
        >
          <Tab>Base</Tab>
          <Tab>Style</Tab>
          <Tab>Margin</Tab>
          <Tab>Radial labels</Tab>
          <Tab>Slices labels</Tab>
          <Tab>Interactivity</Tab>
        </TabBar>

        <div className="tab-content" style={{ margin: 10 }}>
          {activeTab === 0 && (
            <div>
              <label>Start Angle</label>
              <SliderStartAngle
                startAngle={settings.startAngle}
                onChange={value =>
                  this.props.updateSetting({ startAngle: value })
                }
              />
              <label>End Angle</label>
              <SliderEndAngle
                endAngle={settings.endAngle}
                onChange={value =>
                  this.props.updateSetting({ endAngle: value })
                }
              />
              <label>Inner Radius</label>
              <SliderInnerRadius
                innerRadius={settings.innerRadius}
                onChange={value =>
                  this.props.updateSetting({ innerRadius: value })
                }
              />
              <label>Pad Angle</label>
              <SliderPadAngle
                padAngle={settings.padAngle}
                onChange={value =>
                  this.props.updateSetting({ padAngle: value })
                }
              />
              <label>Corner Radius</label>
              <SliderCornerRadius
                cornerRadius={settings.cornerRadius}
                onChange={value =>
                  this.props.updateSetting({ cornerRadius: value })
                }
              />
            </div>
          )}

          {activeTab === 1 && (
            <div>
              <label>Colors</label>
              <SelectColors
                colors={settings.colors}
                onChange={value => this.props.updateSetting({ colors: value })}
              />
              <label>Color by</label>
              <SelectColorBy
                colorBy={settings.colorBy}
                onChange={value => this.props.updateSetting({ colorBy: value })}
              />
              <label>Border Width</label>
              <SliderBorderWidth
                borderWidth={settings.borderWidth}
                onChange={value =>
                  this.props.updateSetting({ borderWidth: value })
                }
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <label>Margin: Top</label>
              <SliderMarginTop
                sliderMarginTop={settings.sliderMarginTop}
                onChange={value =>
                  this.props.updateSetting({ sliderMarginTop: value })
                }
              />
              <label>Margin: Bottom</label>
              <SliderMarginBottom
                sliderMarginBottom={settings.sliderMarginBottom}
                onChange={value =>
                  this.props.updateSetting({ sliderMarginBottom: value })
                }
              />
              <label>Margin: Left</label>
              <SliderMarginLeft
                sliderMarginLeft={settings.sliderMarginLeft}
                onChange={value =>
                  this.props.updateSetting({ sliderMarginLeft: value })
                }
              />
              <label>Margin: Right</label>
              <SliderMarginRight
                sliderMarginRight={settings.sliderMarginRight}
                onChange={value =>
                  this.props.updateSetting({ sliderMarginRight: value })
                }
              />
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <label>Enable Radial Labels</label>
              {/* <SwitchEnableRadialLabels
                enableRadialLabels={settings.enableRadialLabels}
                onChange={value =>
                  this.props.updateSetting({ enableRadialLabels: value })
                }
              /> */}
              <label>Radial Label</label>
              <SelectRadialLabel
                selectRadialLabels={settings.selectRadialLabels}
                onChange={value =>
                  this.props.updateSetting({ selectRadialLabels: value })
                }
              />
              <label>Radial Label Skip Angle</label>
              <SliderRadialLabelsSkipAngle
                radialLabelsSkipAngle={settings.radialLabelsSkipAngle}
                onChange={value =>
                  this.props.updateSetting({ radialLabelsSkipAngle: value })
                }
              />
              <label>Radial Labels Link Offset</label>
              <SliderRadialLabelsLinkOffset
                radialLabelsLinkOffset={settings.radialLabelsLinkOffset}
                onChange={value =>
                  this.props.updateSetting({ radialLabelsLinkOffset: value })
                }
              />
              <label>Radial Labels Link Diagonal Length</label>
              <SliderRadialLabelsLinkDiagonalLength
                radialLabelsLinkDiagonalLength={
                  settings.radialLabelsLinkDiagonalLength
                }
                onChange={value =>
                  this.props.updateSetting({
                    radialLabelsLinkDiagonalLength: value
                  })
                }
              />
              <label>Radial Labels Link Horizontal Length</label>
              <SliderRadialLabelsLinkHorizontalLength
                radialLabelsLinkHorizontalLength={
                  settings.radialLabelsLinkHorizontalLength
                }
                onChange={value =>
                  this.props.updateSetting({
                    radialLabelsLinkHorizontalLength: value
                  })
                }
              />
              <label>Radial Labels Text Offset</label>
              <SliderRadialLabelsTextOffset
                radialLabelsTextOffset={settings.radialLabelsTextOffset}
                onChange={value =>
                  this.props.updateSetting({ radialLabelsTextOffset: value })
                }
              />
              <label>Radial Labels Link Stroke Width</label>
              <SliderRadialLabelsLinkStrokeWidth
                radialLabelsLinkStrokeWidth={
                  settings.radialLabelsLinkStrokeWidth
                }
                onChange={value =>
                  this.props.updateSetting({
                    radialLabelsLinkStrokeWidth: value
                  })
                }
              />
            </div>
          )}

          {activeTab === 4 && (
            <div>
              <label>Enable Slices Labels</label>
              {/* <SwitchEnableSlicesLabels
                enableSlicesLabels={settings.enableSlicesLabels}
                onChange={value =>
                  this.props.updateSetting({ enableSlicesLabels: value })
                }
              /> */}
              <label>Slice Label</label>
              <SelectSliceLabel
                selectSliceLabel={settings.selectSliceLabel}
                onChange={value =>
                  this.props.updateSetting({ selectSliceLabel: value })
                }
              />
              <label>Slices Label Skip Angle</label>
              <SliderSlicesLabelsSkipAngle
                slicesLabelsSkipAngle={settings.slicesLabelsSkipAngle}
                onChange={value =>
                  this.props.updateSetting({ slicesLabelsSkipAngle: value })
                }
              />
            </div>
          )}
          {activeTab === 5 && (
            <div>
              <label>Is Interactive</label>
              {/* <SwitchIsInteractive
                isInteractive={settings.isInteractive}
                onChange={value =>
                  this.props.updateSetting({ isInteractive: value })
                }
              /> */}
            </div>
          )}
        </div>
      </nav>
    );
  }
}
