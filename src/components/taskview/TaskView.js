import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MyMenu from '../mymenu/MyMenu'

export default class TaskView extends Component {
  render() {
    return (
      <Container className="dashboard-container" fluid>
        <MyMenu />
      </Container>
    )
  }
}
