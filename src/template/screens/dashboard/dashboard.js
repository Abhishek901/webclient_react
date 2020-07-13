import React, { Component } from "react";
import "./dashboard.css";
import { Sidenav, Nav, Dropdown, Icon } from "rsuite";
import { Route, NavLink, Link } from "react-router-dom";
import UserManagemnet from "./manage-user/ManageUser";
import Shipments from "./shipments/Shipments";
import Hubs from "./hubs/Hubs";

export default class Deshboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  componentDidMount() {
    console.log("mounted here");
    let expiration = window.localStorage.getItem("tokenExpiration");
    var unixTimestamp = new Date().getTime() / 1000;
    console.log(unixTimestamp, expiration);
    if (expiration !== null) {
      console.log("here in token passed");
      this.setState({ isAuthenticated: true });
    }
  }
  render() {
    const instance = (
      <div style={{ width: 250 }}>
        <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                DASHBOARD
              </Nav.Item>
              <Nav.Item
                componentClass="span"
                eventKey="2"
                icon={<Icon icon="group" />}
              >
                <Link to="/dashboard/manage-users">USER MANAGEMENT</Link>
              </Nav.Item>

              <Dropdown
                eventKey="3"
                title="SHIPMENTS"
                icon={<Icon icon="truck" />}
              >
                <Dropdown.Item eventKey="3-1" componentClass="span">
                  <Link to="/dashboard/shipments/upload-reports">
                    {" "}
                    UPLOAD SHIPMENTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-2" componentClass="span">
                  <Link to="/dashboard/shipments/shipment-reports">
                    REPORTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-3" componentClass="span">
                  <Link to="/dashboard/shipments/assign-shipment">
                    ASSIGN SHIPMENTS
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-4" componentClass="span">
                  <Link to="/dashboard/shipments/manage-shipment">
                    MANAGE SHIPMENTS
                  </Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="3"
                title="HUBS"
                icon={<Icon icon="building-o" />}
              >
                <Dropdown.Item eventKey="3-1" componentClass="span">
                  <Link to="/dashboard/hubs/manage-hubs"> MANAGE HUBS</Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3-2" componentClass="span">
                  <Link to="/dashboard/hubs/hubs-repots">REPORTS</Link>
                </Dropdown.Item>
              </Dropdown>
              <Dropdown
                eventKey="4"
                title="Settings"
                icon={<Icon icon="gear-circle" />}
              >
                <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                <Dropdown.Menu eventKey="4-5" title="Custom Action">
                  <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
    );

    const main_dashboard = (
      <div className="container_dash">
        <div className="sideNav">{instance}</div>
        <div className="display">
          <div className="logoSection">
            <img
              src="../../src/images/logo.png"
              alt=""
              className="img-responsive"
            />
          </div>
          <div className="main_display">
            <Route path="/dashboard/manage-users" component={UserManagemnet} />
            <Route path="/dashboard/shipments" component={Shipments} />
            <Route path="/dashboard/hubs" component={Hubs} />
          </div>
        </div>
      </div>
    );

    const notAuthticated = (
      <div className="not_authorize">
        <div className="logoSection">
          <img
            src="../../src/images/logo.png"
            alt=""
            className="img-responsive"
          />
        </div>
        <h1>Sorry!! You are not Authorize for this access .......</h1>
      </div>
    );
    if (this.state.isAuthenticated) {
      return main_dashboard;
    } else {
      return notAuthticated;
    }
  }
}
