import React from 'react';
import './DashBoard.css';
import Container from 'react-bootstrap/Container';
import MyMenu from '../mymenu/MyMenu';
import TaskSummary from '../tasksummary/TaskSummary';

export default function DashBoard() {
  return (
    <Container className="dashboard-container" fluid>
      <MyMenu />
      <TaskSummary />
    </Container>
  );
}
