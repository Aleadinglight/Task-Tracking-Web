import React from 'react';
import './DashBoard.css';
import Container from 'react-bootstrap/Container';
import MyMenu from '../mymenu/MyMenu';
import Summary from '../summary/Summary';

export default function DashBoard() {
  return (
    <Container className="dashboard-container" fluid>
      <MyMenu />
      <Summary />
    </Container>
  );
}
