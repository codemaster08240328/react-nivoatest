import React from "react";
import { TabBar, Tab } from "@rmwc/tabs";

import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";

import "@material/radio/dist/mdc.radio.css";
import "@material/select/dist/mdc.select.css";
import "@material/slider/dist/mdc.slider.css";
import "@material/switch/dist/mdc.switch.css";

import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

import "@material/form-field/dist/mdc.form-field.css";
import SelectColors from "../viewinstance/selectColors";

export default class SidebarParallelCoordinates extends React.Component {
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
          <Tab>Variables</Tab>
          <Tab>Base</Tab>
          <Tab>Style</Tab>
          <Tab>Margin</Tab>
          <Tab>Motion</Tab>
        </TabBar>

        <div className="tab-content" style={{ margin: 10 }}>
          {activeTab === 0 && <div />}

          {activeTab === 1 && (
            <div>
              <label>Colors</label>
              <SelectColors
                colors={settings.colors}
                onChange={value => this.props.updateSetting({ colors: value })}
              />
            </div>
          )}

          {activeTab === 2 && <div />}

          {activeTab === 3 && <div />}

          {activeTab === 4 && <div />}
        </div>
      </nav>
    );
  }
}
