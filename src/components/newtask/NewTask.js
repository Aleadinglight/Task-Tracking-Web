import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./NewTask.css";

export default function NewTask(props) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    priority: 0,
    status: 0,
    due: ""
  });
  const {
    show,
    onHide,
    inputTask
  } = props;

  const getTaskName = () => {
    if (!inputTask) {
      return "";
    }

    return inputTask.name;
  };

  const getTaskDescription = () => {
    if (!inputTask) {
      return "";
    }

    return inputTask.description;
  };

  const getTaskPriority = () => {
    if (!inputTask) {
      return 0;
    }
    return inputTask.priority;
  };

  const getTaskStatus = () => {
    if (!inputTask) {
      return 0;
    }
    return inputTask.status;
  };

  const getTaskDate = () => {
    if (!inputTask) {
      const date = new Date(Date.now());
      const offset = date.getTimezoneOffset();
      const trueDate = new Date(date.getTime() - (offset * 60 * 1000));
      return trueDate.toISOString().split("T")[0];
    }

    const date = new Date(inputTask.due.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    const offset = date.getTimezoneOffset();
    const trueDate = new Date(date.getTime() - (offset * 60 * 1000));
    return trueDate.toISOString().split("T")[0];
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
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
            <Form.Control
              placeholder="Enter task name"
              defaultValue={getTaskName()}
              onChange={(e) => setTask({
                ...task,
                name: e.target.value
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description of this task"
              as="textarea"
              defaultValue={getTaskDescription()}
              onChange={(e) => setTask({
                ...task,
                description: e.target.value
              })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Form.Label>Deadline</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={getTaskDate()}
                  onChange={(e) => setTask({
                    ...task,
                    due: e.target.value
                  })}
                />
              </Col>
              <Col>
                <Form.Label>Priority</Form.Label>

                <Form.Select
                  label="Priority"
                  defaultValue={getTaskPriority()}
                  onChange={(e) => setTask({
                    ...task,
                    priority: e.target.value
                  })}
                >
                  <option value={0}>High</option>
                  <option value={1}>Medium</option>
                  <option value={2}>Low</option>
                </Form.Select>

              </Col>
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Select
                  defaultValue={getTaskStatus()}
                  onChange={(e) => setTask({
                    ...task,
                    status: e.target.value
                  })}
                >
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
          onClick={() => onHide(task)}
        >
          Update
        </Button>
        <Button
          variant="secondary"
          onClick={() => onHide(false)}
        >
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

NewTask.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  inputTask: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.number,
    priority: PropTypes.number,
    due: PropTypes.node,
  })
};

NewTask.defaultProps = {
  inputTask: null,
};
