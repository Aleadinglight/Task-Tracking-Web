import "./MyMenu.css"
import React, { Component } from 'react'
import { Stack } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartArea, faCog, faClipboardList, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default class MyMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStyle: {
        color: '#0049b0',
        backgroundColor: '#e5e8ec'
      }
    }
  }

  checkActive = (match, location) => {
    if (!match) {
      return false;
    }
    return match.isExact;
  }

  render() {
    return (
      <div className="my-menu">
        <Stack>

          <div className="my-menu-header">
            <h2 className="my-menu-header-text">
              Task Tracking
            </h2>
          </div>

          <NavLink className="my-menu-item" to="/"
            isActive={this.checkActive}
            activeStyle={this.state.activeStyle}
          >
            <FontAwesomeIcon icon={faChartArea} />
            {" "}
            <b>Dash Board</b>
          </NavLink>
          <NavLink className="my-menu-item"
            to="/tasks" 
            isActive={this.checkActive}
            activeStyle={this.state.activeStyle}
          >
            <FontAwesomeIcon icon={faClipboardList} />
            {" "}
            <b>My Tasks</b>
          </NavLink>
          <NavLink className="my-menu-item"
            to="/settings"
            isActive={this.checkActive}
            activeStyle={this.state.activeStyle}
          >
            <FontAwesomeIcon icon={faCog} />
            {" "}
            <b>User Settings</b>
          </NavLink>
          <NavLink className="my-menu-item"
            to="/calendar"
            isActive={this.checkActive}
            activeStyle={this.state.activeStyle}
          >
            <FontAwesomeIcon icon={faCalendarAlt} />
            {" "}
            <b>My Calendar</b>
          </NavLink>
          <NavLink className="my-menu-item"
            to="/about"
            isActive={this.checkActive}
            activeStyle={this.state.activeStyle}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            {" "}
            <b>About</b>
          </NavLink>
        </Stack>
      </div >
    )
  }
}
