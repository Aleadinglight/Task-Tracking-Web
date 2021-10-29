import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MyMenu from '../mymenu/MyMenu'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './TaskView.css'

export default class TaskView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    }
  }

  setModalShow = (isShow) => {
    console.log(`isShow`, isShow)
    this.setState({
      modalShow: isShow
    });
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
              <Accordion.Header> </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion className="task-list">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    )
  }
}
