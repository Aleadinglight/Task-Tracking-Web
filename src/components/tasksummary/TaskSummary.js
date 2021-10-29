import './TaskSummary.css'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import MyChart from '../mychart/MyChart'
export default class TaskSummary extends Component {
  render() {
    return (
      <div className="dashboard-content-container">
        <Navbar className="my-navbar" >
          <Container>
            <Navbar.Brand ></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="dashboard-content" fluid>
          <h2 className="dashboard-header">Dashboard</h2>
          <Card className="summary-card">
            <Card.Header><b>On-going</b></Card.Header>
            <Card.Body>
              <Card.Text className="summary-card-title">
                3
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="summary-card">
            <Card.Header><b>Completed</b></Card.Header>
            <Card.Body>
              <Card.Text className="summary-card-title">
                10
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="summary-card">
            <Card.Header><b>Open</b></Card.Header>
            <Card.Body>
              <Card.Text className="summary-card-title">
                5
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="summary-card">
            <Card.Header><b>Overdude</b></Card.Header>
            <Card.Body>
              <Card.Text className="summary-card-title">
                1
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
        <MyChart />
      </div>
    )
  }
}
