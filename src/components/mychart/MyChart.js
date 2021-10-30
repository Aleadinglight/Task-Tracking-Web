import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import "./MyChart.css"
import Chart from 'chart.js/auto';

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {

    const ticketSolved = document.getElementById('ticket-solve-chart');
    new Chart(ticketSolved, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          fill: true,
          label: 'Number of tickets',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ticketType = document.getElementById('ticket-type-chart');
    new Chart(ticketType, {
      type: 'doughnut',
      data: {
        labels: ['High', 'Medium', 'Low ', 'Hobby '],
        datasets: [{
          label: '# of Votes',
          data: [30, 20, 10, 50],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  render() {
    return (
      <Container className="dashboard-content" fluid>
        <Card className="ticket-solved-card">
          <Card.Header><b>Ticket solved</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-solve-chart" ></canvas>
          </Card.Body>
        </Card>

        <Card className="ticket-type-card">
          <Card.Header><b>Ticket type</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-type-chart" ></canvas>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
