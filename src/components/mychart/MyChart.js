import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import "./MyChart.css";

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    const ticketSolved = document.getElementById('ticket-solve-chart');

    const generated = this.generateData();
    const labels = generated.map((item) => item.date);
    const data = generated.map((item) => item.count);
    // const sum = data.reduce((partialSum, item) => partialSum + item, 0);
    this.state.lineChart = new Chart(ticketSolved, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          fill: true,
          label: 'Number of task completed',
          data,
          backgroundColor: [
            // 'rgba(75, 192, 192, 0.2)',
            // 'rgba(255, 206, 86, 0.2)',
            // 'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            // 'rgba(153, 102, 255, 0.2)',
            // 'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            // 'rgba(255, 99, 132, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            // 'rgba(255, 159, 64, 1)',
            // 'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        // responsive: false,
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    const ticketType = document.getElementById('ticket-type-chart');
    this.state.doughnutChart = new Chart(ticketType, {
      type: 'doughnut',
      data: {
        labels: ['High', 'Medium', 'Low'],
        datasets: [{
          label: '%',
          data: [30, 50, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          tooltip: {
            callbacks: {
              label(context) {
                const label = context.dataset.label || '';
                return `${context.parsed}${label} of the tasks has ${context.label.toLowerCase()} priority`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  generateData = () => {
    const MAX = 10;
    const MIN = 0;
    const data = [];
    const { date } = this.state;
    for (let i = 0; i < 30; i += 1) {
      data.push({
        count: Math.floor(Math.random() * (MAX - MIN + 1)) + MIN,
        date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
      date.setDate(date.getDate() - 1);
    }

    return data;
  };

  render() {
    return (
      <Container className="dashboard-content" fluid>
        <Card className="ticket-solved-card">
          <Card.Header><b>Task Complete History</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-solve-chart" height="400" width="900" />
          </Card.Body>
        </Card>

        <Card className="ticket-type-card">
          <Card.Header><b>Task Priority Distribution</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-type-chart" width="400" />
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
