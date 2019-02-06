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
import SliderPadAngleSmall from "../viewinstance/sliderPadAngleSmall";
import SliderInnerRadiusRatio from "../viewinstance/sliderInnerRadiusRatio";
import SliderInnerRadiusOffset from "../viewinstance/sliderInnerRadiusOffset";
import SelectColors from "../viewinstance/selectColors";
import SliderArcOpacity from "../viewinstance/sliderArcOpacity";
import SliderArcBorderWidth from "../viewinstance/sliderArcBorderWidth";
import SelectArcBorderColor from "../viewinstance/selectRadialLabel";
import SliderRibbonOpacity from "../viewinstance/sliderRibbonOpacity";
import SliderRibbonBorderWidth from "../viewinstance/sliderRibbonBorderWidth";
import SelectRibbonBorderColor from "../viewinstance/selectRibbonBorderColor";
import SliderMarginTop from "../viewinstance/sliderMarginTop";
import SliderMarginBottom from "../viewinstance/sliderMarginBottom";
import SliderMarginLeft from "../viewinstance/sliderMarginLeft";
import SliderMarginRight from "../viewinstance/sliderMarginRight";
// import SwitchEnableLabel from "../viewinstance/switchEnableLabel";
import SelectLabels from "../viewinstance/selectLabel";
import SliderLabelOffset from "../viewinstance/sliderLabelOffset";
import SliderLabelRotation from "../viewinstance/sliderLabelRotation";
import SelectLabelTextColor from "../viewinstance/selectLabelTextColor";
// import SwitchIsInteractive from "../viewinstance/switchIsInteractive";
import SliderArcHoverOpacity from "../viewinstance/sliderArcHoverOpacity";
import SliderArcHoverOthersOpacity from "../viewinstance/sliderArcHoverOthersOpacity";
import SliderRibbonHoverOpacity from "../viewinstance/sliderRibbonHoverOpacity";
import SliderRibbonHoverOthersOpacity from "../viewinstance/sliderRibbonHoverOthersOpacity";
import SwitchAnimate from "../viewinstance/switchAnimate";
import SliderMotionStiffness from "../viewinstance/sliderMotionStiffness";
import SliderMotionDamping from "../viewinstance/sliderMotionDamping";

export default class SidebarChord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  render() {
    let { settings } = this.props;
    const { left, right, top, bottom } = settings.margin;
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
          <Tab>Labels</Tab>
          <Tab>Interactivity</Tab>
          <Tab>Motion</Tab>
        </TabBar>

        <div className="tab-content" style={{ margin: 10 }}>
          {activeTab === 0 && (
            <div>
              <label>Pad Angle</label>
              <SliderPadAngleSmall
                padAngle={settings.padAngle}
                onChange={value =>
                  this.props.updateSetting({ padAngle: value })
                }
              />
              <label>Inner Radius Ratio</label>
              <SliderInnerRadiusRatio
                innerRadiusRatio={settings.innerRadiusRatio}
                onChange={value =>
                  this.props.updateSetting({ innerRadiusRatio: value })
                }
              />
              <label>Inner Radius Offset</label>
              <SliderInnerRadiusOffset
                innerRadiusOffset={settings.innerRadiusOffset}
                onChange={value =>
                  this.props.updateSetting({ innerRadiusOffset: value })
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
              <label>Arc Opacity</label>
              <SliderArcOpacity
                arcOpacity={settings.arcOpacity}
                onChange={value =>
                  this.props.updateSetting({ arcOpacity: value })
                }
              />
              <label>Arc Border Width</label>
              <SliderArcBorderWidth
                arcBorderWidth={settings.arcBorderWidth}
                onChange={value =>
                  this.props.updateSetting({ arcBorderWidth: value })
                }
              />
              <label>Arc Border Color</label>
              <SelectArcBorderColor
                arcBorderColor={settings.arcBorderColor}
                onChange={value =>
                  this.props.updateSetting({ arcBorderColor: value })
                }
              />
              <label>Ribbon Opacity</label>
              <SliderRibbonOpacity
                ribbonOpacity={settings.ribbonOpacity}
                onChange={value =>
                  this.props.updateSetting({ ribbonOpacity: value })
                }
              />
              <label>Ribbon Border Width</label>
              <SliderRibbonBorderWidth
                ribbonBorderWidth={settings.ribbonBorderWidth}
                onChange={value =>
                  this.props.updateSetting({ ribbonBorderWidth: value })
                }
              />
              <label>Ribbon Border Color</label>
              <SelectRibbonBorderColor
                ribbonBorderColor={settings.ribbonBorderColor}
                onChange={value =>
                  this.props.updateSetting({ ribbonBorderColor: value })
                }
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <label>Margin: Top</label>
              <SliderMarginTop
                sliderMarginTop={settings.margin.top}
                onChange={value =>
                  this.props.updateSetting({
                    margin: { right, left, top: value, bottom }
                  })
                }
              />
              <label>Margin: Bottom</label>
              <SliderMarginBottom
                sliderMarginBottom={settings.margin.bottom}
                onChange={value =>
                  this.props.updateSetting({
                    margin: { right, left, top, bottom: value }
                  })
                }
              />
              <label>Margin: Left</label>
              <SliderMarginLeft
                sliderMarginLeft={settings.margin.left}
                onChange={value =>
                  this.props.updateSetting({
                    margin: { right, left: value, top, bottom }
                  })
                }
              />
              <label>Margin: Right</label>
              <SliderMarginRight
                sliderMarginRight={settings.margin.right}
                onChange={value =>
                  this.props.updateSetting({
                    margin: { right: value, left, top, bottom }
                  })
                }
              />
            </div>
          )}

          {activeTab === 3 && (
            <div>
              <label>Enable Labels</label>
              {/* <SwitchEnableLabel
                enableLabel={settings.enableLabel}
                onChange={value =>
                  this.props.updateSetting({ enableLabel: value })
                }
              /> */}
              <label>Label</label>
              <SelectLabels
                selectLabels={settings.selectLabels}
                onChange={value =>
                  this.props.updateSetting({ selectLabels: value })
                }
              />
              <label>Label Offset</label>
              <SliderLabelOffset
                labelOffset={settings.labelOffset}
                onChange={value =>
                  this.props.updateSetting({ labelOffset: value })
                }
              />
              <label>Label Rotation</label>
              <SliderLabelRotation
                labellabelRotationOffset={settings.labelRotation}
                onChange={value =>
                  this.props.updateSetting({ labelRotation: value })
                }
              />
              <label>Label Text Color</label>
              <SelectLabelTextColor
                labelTextColor={settings.labelTextColor}
                onChange={value =>
                  this.props.updateSetting({ labelTextColor: value })
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
              <label>Arc Hover Opacity</label>
              <SliderArcHoverOpacity
                arcHoverOpacity={settings.arcHoverOpacity}
                onChange={value =>
                  this.props.updateSetting({ arcHoverOpacity: value })
                }
              />
              <label>Arc Hover Others Opacity</label>
              <SliderArcHoverOthersOpacity
                arcHoverOthersOpacity={settings.arcHoverOthersOpacity}
                onChange={value =>
                  this.props.updateSetting({ arcHoverOthersOpacity: value })
                }
              />
              <label>Ribbon Hover Opacity</label>
              <SliderRibbonHoverOpacity
                ribbonHoverOpacity={settings.ribbonHoverOpacity}
                onChange={value =>
                  this.props.updateSetting({ ribbonHoverOpacity: value })
                }
              />
              <label>Ribbon Hover Others Opacity</label>
              <SliderRibbonHoverOthersOpacity
                ribbonHoverOthersOpacity={settings.ribbonHoverOthersOpacity}
                onChange={value =>
                  this.props.updateSetting({ ribbonHoverOthersOpacity: value })
                }
              />
              <label>Animate</label>
              <SwitchAnimate
                animate={settings.animate}
                onChange={value => this.props.updateSetting({ animate: value })}
              />
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
