import React, { Component } from 'react'
import { Container, Card } from 'react-bootstrap'
import Chart from 'chart.js/auto';
import "./MyChart.css"

export default class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  generateData = () => {
    let data = [];
    let currentDate = new Date(),
      max = 6,
      min = 0;

    for (let i = 0; i < 30; i++) {
      data.push({
        count: Math.floor(Math.random() * (max - min + 1)) + min,
        date: currentDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      })
      currentDate.setDate(currentDate.getDate() - 1);
    }

    data = [
      {
        "count": 0,
        "date": "Fri, Oct 1"
      },
      {
        "count": 3,
        "date": "Sat, Oct 2"
      },
      {
        "count": 2,
        "date": "Sun, Oct 3"
      },
      {
        "count": 0,
        "date": "Mon, Oct 4"
      },
      {
        "count": 0,
        "date": "Tue, Oct 5"
      },
      {
        "count": 0,
        "date": "Wed, Oct 6"
      },
      {
        "count": 2,
        "date": "Thu, Oct 7"
      },
      {
        "count": 1,
        "date": "Fri, Oct 8"
      },
      {
        "count": 1,
        "date": "Sat, Oct 9"
      },
      {
        "count": 2,
        "date": "Sun, Oct 10"
      },
      {
        "count": 2,
        "date": "Mon, Oct 11"
      },
      {
        "count": 3,
        "date": "Tue, Oct 12"
      },
      {
        "count": 3,
        "date": "Wed, Oct 13"
      },
      {
        "count": 4,
        "date": "Thu, Oct 14"
      },
      {
        "count": 2,
        "date": "Fri, Oct 15"
      },
      {
        "count": 2,
        "date": "Sat, Oct 16"
      },
      {
        "count": 1,
        "date": "Sun, Oct 17"
      },
      {
        "count": 5,
        "date": "Mon, Oct 18"
      },
      {
        "count": 4,
        "date": "Tue, Oct 19"
      },
      {
        "count": 3,
        "date": "Wed, Oct 20"
      },
      {
        "count": 1,
        "date": "Thu, Oct 21"
      },
      {
        "count": 1,
        "date": "Fri, Oct 22"
      },
      {
        "count": 2,
        "date": "Sat, Oct 23"
      },
      {
        "count": 2,
        "date": "Sun, Oct 24"
      },
      {
        "count": 2,
        "date": "Mon, Oct 25"
      },
      {
        "count": 1,
        "date": "Tue, Oct 26"
      },
      {
        "count": 2,
        "date": "Wed, Oct 27"
      },
      {
        "count": 3,
        "date": "Thu, Oct 28"
      },
      {
        "count": 6,
        "date": "Fri, Oct 29"
      },
      {
        "count": 5,
        "date": "Sat, Oct 30"
      }
    ]
    return data;
  }

  componentDidMount() {
    const ticketSolved = document.getElementById('ticket-solve-chart');

    let generated = this.generateData();
    let labels = generated.map((item) => item.date);
    let data = generated.map((item) => item.count);
    let sum = data.reduce((partial_sum, item) => partial_sum + item, 0);
    console.log(`sum`, sum)
    new Chart(ticketSolved, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          fill: true,
          label: 'Number of task completed',
          data: data,
          backgroundColor: [
            //'rgba(75, 192, 192, 0.2)',
            //'rgba(255, 206, 86, 0.2)',
            //'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            //'rgba(153, 102, 255, 0.2)',
            //'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            //'rgba(255, 99, 132, 1)',
            //'rgba(75, 192, 192, 1)',
            //'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            //'rgba(255, 159, 64, 1)',
            //'rgba(153, 102, 255, 1)',
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
    new Chart(ticketType, {
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
              label: function (context) {
                let label = context.dataset.label || '';
                console.log(`context`, context)
                return `${context.parsed}${label} of the tasks has ${context.label.toLowerCase() } priority`;
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

  render() {
    return (
      <Container className="dashboard-content" fluid>
        <Card className="ticket-solved-card">
          <Card.Header><b>Task Complete History</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-solve-chart" height="400" width="900"></canvas>
          </Card.Body>
        </Card>

        <Card className="ticket-type-card">
          <Card.Header><b>Task Priority Distribution</b></Card.Header>
          <Card.Body>
            <canvas id="ticket-type-chart" width="400"></canvas>
          </Card.Body>
        </Card>
      </Container>
    )
  }
}
