import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MyMenu from '../mymenu/MyMenu'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import './TaskView.css'

export default class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      data: [
        {
          id: 1,
          name: "Study advance C++",
          description: "Study c++ in violll as optional study ",
          due: "20-12-2021",
          priority: 0,
          status: 0,
        },
        {
          id: 2,
          name: "Study advance Java",
          description: "Study java in violll as optional study ",
          due: "20-12-2021",
          priority: 2,
          status: 0,
        },
        {
          id: 3,
          name: "Study advance Python",
          description: "Study python in violll as optional study ",
          due: "20-12-2021",
          priority: 1,
          status: 2,
        }
      ]
    }
  }

  setModalShow = (isShow) => {
    console.log(`isShow`, isShow)
    this.setState({
      modalShow: isShow
    });
  }

  openTask = (id) => {
    console.log(`open task with id:`, id)
  }

  getPriorityText = (priority) => {
    if (priority === 0) {
      return (
        <Badge bg="danger">
          High
        </Badge>
      );
    }
    else if (priority === 1) {
      return (
        <Badge bg="warning">
          High
        </Badge>
      );
    }
    else if (priority === 2) {
      return (
        <Badge bg="success">
          Low
        </Badge>
      );
    }
  }

  getItemOfStatus = (status, item) => {
    if (item.status === status) {
      return (
        <ListGroup.Item as="li" key={item.id}>
          <Container fluid>
            <Row>
              <Col>
                <Button className="task-list-name"
                  variant="link"
                  onClick={() => this.openTask(item.id)}>
                  {item.name}
                </Button>
              </Col>
              <Col md="auto" lg="2" className="task-list-due">
                <Button className="task-list-due"
                  variant="link">
                  <span><FontAwesomeIcon icon={faCalendarDay} />{" " + item.due}</span>
                </Button>

              </Col>
              <Col xs lg="1">
                <Button className="task-list-priority"
                  variant="light">
                  {this.getPriorityText(item.priority)}
                </Button>
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
      )
    }
    else {
      return ""
    }
  }


  render() {
    return (
      <Container className="dashboard-container" fluid>
        <MyMenu />
        <Modal
          show={this.state.modalShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              New Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => this.setModalShow(false)}>
              Create
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.setModalShow(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="tasklist-container">
          <Button variant="primary" onClick={() => this.setModalShow(true)}>
            <FontAwesomeIcon icon={faPlus} />
            {" "}
            <b>New Task</b>

          </Button>
          <Accordion className="task-list">
            <Accordion.Item eventKey="0">
              <Accordion.Header><b>On-Going</b></Accordion.Header>
              <Accordion.Body className="task-list-body">
                <ListGroup as="ul">
                  {this.state.data.map((item, idx) => {
                    return this.getItemOfStatus(0, item)
                  })}
                </ListGroup>

              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="task-list">
            <Accordion.Item eventKey="1">
              <Accordion.Header><b>Open</b></Accordion.Header>
              <Accordion.Body className="task-list-body" >
                <ListGroup as="ul">
                  {this.state.data.map((item, idx) => {
                    return this.getItemOfStatus(1, item)
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="task-list">
            <Accordion.Item eventKey="2">
              <Accordion.Header><b>Completed</b></Accordion.Header>
              <Accordion.Body className="task-list-body">
                <ListGroup as="ul">
                  {this.state.data.map((item, idx) => {
                    return this.getItemOfStatus(2, item)
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="task-list">
            <Accordion.Item eventKey="3">
              <Accordion.Header><b>Overdue</b></Accordion.Header>
              <Accordion.Body className="task-list-body">
                <ListGroup as="ul">
                  {this.state.data.map((item, idx) => {
                    return this.getItemOfStatus(3, item)
                  })}
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    )
  }
}
