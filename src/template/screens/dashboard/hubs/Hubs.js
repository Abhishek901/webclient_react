import React, { Component } from "react";
import Manage from "./manage-hubs/ManageHubs";
import { Route } from "react-router-dom";
import Reports from "./hub-reports/HubReport";
import { Icon } from "rsuite";
export default class Hubs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="inner_screen_herader_style">
          <Icon icon="building-o" />
          <h4>MANAGE HUBS</h4>
        </div>
        <Route path="/dashboard/hubs/manage-hubs" component={Manage}></Route>
        <Route path="/dashboard/hubs/hubs-repots" component={Reports}></Route>
      </div>
    );
  }
}
