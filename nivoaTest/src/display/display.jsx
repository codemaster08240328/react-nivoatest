import React from "react";
import { Chord, ParallelCoordinates, Pie, Radar } from "../chart";
import {
  SidebarChord,
  SidebarParallelCoordinates,
  SidebarPie,
  SidebarRadar
} from "../sidebarinstances";
import {
  defaultSettingsChord,
  defaultSettingsParallelCoordinates,
  defaultSettingsPie,
  defaultSettingsRadar
} from "../value";
import {
  dataChord,
  dataParallelCoordinates,
  dataPie,
  dataRadar
} from "../services";

class Display extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      settings: null,
      type: props.type
    };
  }
  componentWillMount = () => {
    if (this.state.type === "Chord") {
      this.setState({ settings: defaultSettingsChord });
      return;
    } else if (this.state.type === "ParallelCoordinates") {
      this.setState({ settings: defaultSettingsParallelCoordinates });

      return;
    } else if (this.state.type === "Pie") {
      this.setState({ settings: defaultSettingsPie });

      return;
    } else if (this.state.type === "Radar") {
      this.setState({ settings: defaultSettingsRadar });

      return;
    }
  };
  renderSidebar = () => {
    switch (this.state.type) {
      case "Chord":
        return (
          <SidebarChord
            settings={this.state.settings}
            updateSetting={this.updateSetting}
          />
        );
      case "ParallelCoordinates":
        return (
          <SidebarParallelCoordinates
            settings={this.state.settings}
            updateSetting={this.updateSetting}
          />
        );
      case "Pie":
        return (
          <SidebarPie
            settings={this.state.settings}
            updateSetting={this.updateSetting}
          />
        );
      case "Radar":
        return (
          <SidebarRadar
            settings={this.state.settings}
            updateSetting={this.updateSetting}
          />
        );
      default:
        break;
    }
  };

  renderChart = () => {
    switch (this.state.type) {
      case "Chord":
        // alert("chord render execute");
        return <Chord data={dataChord} settings={this.state.settings} />;
      case "ParallelCoordinates":
        return (
          <ParallelCoordinates
            data={dataParallelCoordinates}
            settings={this.state.settings}
          />
        );
      case "Pie":
        return <Pie data={dataPie} settings={this.state.settings} />;
      case "Radar":
        return <Radar data={dataRadar} settings={this.state.settings} />;
      default:
        break;
    }
  };

  updateSetting = props => {
    console.log(this.state.settings);
    // const obj = Object.assign({}, this.state.settings);
    // const settings = _.merge(obj, props);
    this.setState({ settings: { ...this.state.settings, ...props } });
    // this.setState({ settings });
  };

  componentWillReceiveProps = props => {
    this.setState({ type: props.type });
    if (props.type === "Chord") {
      this.setState({ settings: defaultSettingsChord });
      return;
    } else if (props.type === "ParallelCoordinates") {
      this.setState({ settings: defaultSettingsParallelCoordinates });

      return;
    } else if (props.type === "Pie") {
      this.setState({ settings: defaultSettingsPie });

      return;
    } else if (props.type === "Radar") {
      this.setState({ settings: defaultSettingsRadar });

      return;
    }
  };

  render() {
    return (
      <div style={{ width: "100vw", display: "flex" }}>
        {this.renderSidebar()}
        <div style={{ height: "90vh", width: "80vw" }}>
          {this.renderChart()}
        </div>
      </div>
    );
  }
}

export default Display;
