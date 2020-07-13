import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Icon } from "rsuite";
import Assign from "./assign-shipment/AssignShipment";
import Manage from "./manage-shipment/ManageShipment";
import Reports from "./shipment-reports/ShpmentReports";
import Upload from "./upload-shipment/UploadShipment";
import "./Shipments.css";
export default class Shipments extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="inner_screen_herader_style">
          <Icon icon="truck" />
          <h4>MANAGE SHIPMENTS</h4>
        </div>
        <Route
          path="/dashboard/shipments/assign-shipment"
          component={Assign}
        ></Route>
        <Route
          path="/dashboard/shipments/manage-shipment"
          component={Manage}
        ></Route>
        <Route
          path="/dashboard/shipments/shipment-reports"
          component={Reports}
        ></Route>
        <Route
          path="/dashboard/shipments/upload-reports"
          component={Upload}
        ></Route>
      </div>
    );
  }
}
