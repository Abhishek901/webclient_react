import React, { Component } from "react";
import { Icon } from "rsuite";
import "./ManageUser.css";
export default class UserManagement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="inner_screen_herader_style">
          <Icon icon="group" />
          <h4>MANAGE USERS</h4>
        </div>
        <div className="main_wapper">Manage User</div>
      </div>
    );
  }
}
