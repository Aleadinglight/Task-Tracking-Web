import "./MyMenu.css";
import React from 'react';
import { Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartArea, faCog, faClipboardList, faCalendarAlt, faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

export default function MyMenu() {
  const activeStyle = {
    color: '#3080d0',
    backgroundColor: '#e5e8ec'
  };

  const checkActive = (match) => {
    if (!match) {
      return false;
    }
    return match.isExact;
  };

  return (
    <div className="my-menu">
      <Stack>

        <div className="my-menu-header">
          <h4 className="my-menu-header-text">
            _tasktracking
          </h4>
        </div>

        <NavLink
          className="my-menu-item"
          to="/"
          isActive={checkActive}
          activeStyle={activeStyle}
        >
          <FontAwesomeIcon icon={faChartArea} />
          {" "}
          <b>Dash Board</b>
        </NavLink>
        <NavLink
          className="my-menu-item"
          to="/tasks"
          isActive={checkActive}
          activeStyle={activeStyle}
        >
          <FontAwesomeIcon icon={faClipboardList} />
          {" "}
          <b>My Tasks</b>
        </NavLink>
        <NavLink
          className="my-menu-item"
          to="/settings"
          isActive={checkActive}
          activeStyle={activeStyle}
        >
          <FontAwesomeIcon icon={faCog} />
          {" "}
          <b>User Settings</b>
        </NavLink>
        <NavLink
          className="my-menu-item"
          to="/calendar"
          isActive={checkActive}
          activeStyle={activeStyle}
        >
          <FontAwesomeIcon icon={faCalendarAlt} />
          {" "}
          <b>My Calendar</b>
        </NavLink>
        <NavLink
          className="my-menu-item"
          to="/about"
          isActive={checkActive}
          activeStyle={activeStyle}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          {" "}
          <b>About</b>
        </NavLink>
      </Stack>
    </div>
  );
}
