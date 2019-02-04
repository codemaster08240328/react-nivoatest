import React from "react";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import SelectChart from "./viewinstance/selectChart";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <SelectChart onChange={this.props.onChange} />
        </nav>
      </div>
    );
  }
}
