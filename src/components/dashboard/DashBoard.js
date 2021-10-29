import React, { Component } from 'react'
import './DashBoard.css'
import Container from 'react-bootstrap/Container'
import MyMenu from '../mymenu/MyMenu'
import TaskSummary from '../tasksummary/TaskSummary'

export default class DashBoard extends Component {
  render() {
    return (
      <Container className="dashboard-container" fluid>
        <MyMenu/>
        <TaskSummary />
      </Container>
    )
  }
}

