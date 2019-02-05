import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./NavigationBar";

import Display from "./display/display";
import "./index.css";

class App extends Component {
  state = {
    type: "Chord"
  };

  onChange = value => {
    console.log(value);
    this.setState({
      type: value
    });
  };

  render() {
    return (
      <Router>
        <div>
          <NavigationBar onChange={this.onChange} />
          <div className="main-row">
            <Display type={this.state.type} />
            <Switch />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
