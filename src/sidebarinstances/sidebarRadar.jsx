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
// import SwitchMaxValue from "../viewinstance/switchMaxValue";
import SelectCurve from "../viewinstance/selectCurve";
import SelectColors from "../viewinstance/selectColors";
import SelectColorBy from "../viewinstance/selectColorBy";
import SliderFillOpacity from "../viewinstance/sliderFillOpacity";
import SliderBorderWidth from "../viewinstance/sliderBorderWidth";
import SelectBorderColor from "../viewinstance/selectBorderColor";
import SliderMarginTop from "../viewinstance/sliderMarginTop";
import SliderMarginBottom from "../viewinstance/sliderMarginBottom";
import SliderMarginLeft from "../viewinstance/sliderMarginLeft";
import SliderMarginRight from "../viewinstance/sliderMarginRight";
import SliderGridLevels from "../viewinstance/sliderGridLevels";
import SelectGridShape from "../viewinstance/selectGridShape";
import SliderGridLabelOffset from "../viewinstance/sliderGridLabelOffset";
import SwitchEnableDots from "../viewinstance/switchEnableDots";
import SliderDotSize from "../viewinstance/sliderDotSize";
import SelectDotColor from "../viewinstance/selectDotColor";
import SliderDotBorderWidth from "../viewinstance/sliderDotBorderWidth";
import SelectDotBorderColor from "../viewinstance/selectDotBorderColor";
import SwitchEnableDotLabel from "../viewinstance/switchEnableDotLabel";
import SelectDotLabelType from "../viewinstance/selectDotLabelType";
import SliderDotLabelYOffset from "../viewinstance/sliderDotLabelYOffset";
// import SwitchIsInteractive from "../viewinstance/switchIsInteractive";
import SwitchAnimate from "../viewinstance/switchAnimate";
import SliderMotionStiffness from "../viewinstance/sliderMotionStiffness";
import SliderMotionDamping from "../viewinstance/sliderMotionDamping";

export default class SidebarRadar extends React.Component {
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
          <Tab>Margin</Tab>
          <Tab>Grid</Tab>
          <Tab>Dots</Tab>
          <Tab>Interactivity</Tab>
          <Tab>Motion</Tab>
        </TabBar>

        <div className="tab-content" style={{ margin: 10 }}>
          {activeTab === 0 && (
            <div>
              <label>Max Value</label>
              {/* <SwitchMaxValue
                maxValue={settings.maxValue}
                onChange={value =>
                  this.props.updateSetting({ maxValue: value })
                }
              /> */}
              <label>Curve</label>
              <SelectCurve
                curve={settings.curve}
                onChange={value => this.props.updateSetting({ curve: value })}
              />
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
              <label>Fill Opacity</label>
              <SliderFillOpacity
                fillOpacity={settings.fillOpacity}
                onChange={value =>
                  this.props.updateSetting({ fillOpacity: value })
                }
              />
              <label>Border Width</label>
              <SliderBorderWidth
                borderWidth={settings.borderWidth}
                onChange={value =>
                  this.props.updateSetting({ borderWidth: value })
                }
              />
              <label>Border Color</label>
              <SelectBorderColor
                borderColor={settings.borderColor}
                onChange={value =>
                  this.props.updateSetting({ borderColor: value })
                }
              />
            </div>
          )}

          {activeTab === 1 && (
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

          {activeTab === 2 && (
            <div>
              <label>Grid Levels</label>
              <SliderGridLevels
                gridLevels={settings.gridLevels}
                onChange={value =>
                  this.props.updateSetting({ gridLevels: value })
                }
              />
              <label>Grid Shape</label>
              <SelectGridShape
                gridShape={settings.gridShape}
                onChange={value =>
                  this.props.updateSetting({ gridShape: value })
                }
              />
              <label>Grid Label Offset</label>
              <SliderGridLabelOffset
                gridLabelOffset={settings.gridLabelOffset}
                onChange={value =>
                  this.props.updateSetting({ gridLabelOffset: value })
                }
              />
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <label>Enable Dots</label>
              <SwitchEnableDots
                enableDots={settings.enableDots}
                onChange={value =>
                  this.props.updateSetting({ enableDots: value })
                }
              />
              <label>Dot Size</label>
              <SliderDotSize
                dotSize={settings.dotSize}
                onChange={value => this.props.updateSetting({ dotSize: value })}
              />
              <label>Dot Color</label>
              <SelectDotColor
                dotColor={settings.dotColor}
                onChange={value =>
                  this.props.updateSetting({ dotColor: value })
                }
              />
              <label>Dot Border Width</label>
              <SliderDotBorderWidth
                dotBorderWidth={settings.dotBorderWidth}
                onChange={value =>
                  this.props.updateSetting({ dotBorderWidth: value })
                }
              />
              <label>Dot Border Color</label>
              <SelectDotBorderColor
                dotBorderColor={settings.dotBorderColor}
                onChange={value =>
                  this.props.updateSetting({ dotBorderColor: value })
                }
              />
              <label>Enable Dot Label</label>
              <SwitchEnableDotLabel
                enableDotLabel={settings.enableDotLabel}
                onChange={value =>
                  this.props.updateSetting({ enableDotLabel: value })
                }
              />
              <label>Dot Label</label>
              <SelectDotLabelType
                dotLabel={settings.dotLabel}
                onChange={value =>
                  this.props.updateSetting({ dotLabel: value })
                }
              />
              <label>Dot Label Y Offset</label>
              <SliderDotLabelYOffset
                dotLabelYOffset={settings.dotLabelYOffset}
                onChange={value =>
                  this.props.updateSetting({ dotLabelYOffset: value })
                }
              />
            </div>
          )}

          {activeTab === 4 && (
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

          {activeTab === 5 && (
            <div>
              <label>Animate</label>
              <SwitchAnimate
                animate={settings.animate}
                onChange={value => this.props.updateSetting({ animate: value })}
              />
              <label>Motion Stiffness</label>
              <SliderMotionStiffness
                motionStiffness={settings.motionStiffness}
                onChange={value =>
                  this.props.updateSetting({ motionStiffness: value })
                }
              />
              <label>Motion Damping</label>
              <SliderMotionDamping
                motionDamping={settings.motionDamping}
                onChange={value =>
                  this.props.updateSetting({ motionDamping: value })
                }
              />
            </div>
          )}
        </div>
      </nav>
    );
  }
}
