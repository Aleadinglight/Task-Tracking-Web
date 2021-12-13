import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import "./NewTask.css"

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      task: {
        name: "",
        description: "",
        priority: "0",
        status: "0",
        due: ""
      }
    }
  }

  updateProps = (task) => {
    if (!task) {
      return;
    }

    this.setState({
      task: {
        name: task.name,
        description: task.description,
        priority: task.priority,
        status: task.status,
        due: task.due
      }
    })
  }

  getTaskName = () => {
    if (!this.props.props) {
      return "";
    }
    else {
      return this.props.props.name;
    }
  }

  getTaskDescription = () => {
    if (!this.props.props) {
      return "";
    }
    else {
      return this.props.props.description;
    }
  }

  getTaskPriority = () => {
    if (!this.props.props) {
      return "";
    }
    else {
      return this.props.props.priority;
    }
  }

  getTaskStatus = () => {
    if (!this.props.props) {
      return "";
    }
    else {
      return this.props.props.status;
    }
  }

  getTaskDate = () => {
    if (!this.props.props) {
      return "";
    }
    else {
      return this.props.props.date;
    } 
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4><b>New Task</b></h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control placeholder="Enter task name"
                defaultValue={this.getTaskName()}
                onChange={(e) => this.setState({
                  task: {
                    ...this.state.task,
                    name: e.target.value
                  }
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description of this task"
                as="textarea"
                defaultValue={this.getTaskDescription()}
                onChange={(e) => this.setState({
                  task: {
                    ...this.state.task,
                    description: e.target.value
                  }
                })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="date"
                    defaultValue={this.getTaskDate}
                    onChange={(e) => this.setState({
                      task: {
                        ...this.state.task,
                        due: e.target.value
                      }
                    })} />
                </Col>
                <Col>
                  <Form.Label>Priority</Form.Label>

                  <Form.Select
                    label="Priority"
                    defaultValue={this.getTaskPriority}
                    onChange={(e) => this.setState({
                      task: {
                        ...this.state.task,
                        priority: e.target.value
                      }
                    })}>
                    <option value={0}>High</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Low</option>
                  </Form.Select>

                </Col>
                <Col>
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    defaultValue={this.getTaskStatus}
                    onChange={(e) => this.setState({
                      task: {
                        ...this.state.task,
                        status: e.target.value
                      }
                    })}>
                    <option value={0}>On-Going</option>
                    <option value={1}>Open</option>
                    <option value={2}>Completed</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => this.props.onHide(this.state.task)}>
            Update
          </Button>
          <Button variant="secondary"
            onClick={() => this.props.onHide(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
