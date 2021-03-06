import './Summary.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import MyChart from '../mychart/MyChart';

export default function Summary() {
  return (
    <div className="dashboard-content-container">
      <Navbar className="my-navbar">
        <Container>
          <Navbar.Brand />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as:
              {' '}
              <a href="#login">Admin</a>
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
              65
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
          <Card.Header><b>Overdue</b></Card.Header>
          <Card.Body>
            <Card.Text className="summary-card-title">
              2
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <MyChart />
    </div>
  );
}
