import "./MyMenu.css"
import React, { Component } from 'react'
import { Stack } from "react-bootstrap"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faCog, faTasks, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default class MyMenu extends Component {
  render() {
    return (
      <div className="my-menu">
        <Stack>
          <div className="my-menu-header">

            <h2 className="my-menu-header-text">Task Tracking</h2>

          </div>
          <Link className="my-menu-item" to="/">
            <FontAwesomeIcon icon={faChartBar} />
            {" "}
            <b>Dash Board</b>
          </Link>
          <Link className="my-menu-item" to="/tasks">
            <FontAwesomeIcon icon={faTasks} />
            {" "}
            <b>My Tasks</b>
          </Link>
          <Link className="my-menu-item" to="/tasks">
            <FontAwesomeIcon icon={faCog} />
            {" "}
            <b>User Settings</b>
          </Link>
          <Link className="my-menu-item" to="/tasks">
            <FontAwesomeIcon icon={faChartBar} />
            {" "}
            <b>My Calendar</b>
          </Link>
          <Link className="my-menu-item" to="/tasks">
            <FontAwesomeIcon icon={faCalendar} />
            {" "}
            <b>About This Project</b>
          </Link>
        </Stack>
      </div>
    )
  }
}
