import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import TaskItem from '../taskItem/TaskItem';
import Status from '../../common/status';
import './TaskGroup.css';

export default function TaskGroup(props) {
  const {
    data,
    openTask
  } = props;

  const getItemOfStatus = (item, status) => {
    if (item.status === status) {
      return (
        <TaskItem
          key={item.id}
          id={item.id}
          name={item.name}
          priority={item.priority}
          due={item.due}
          openTask={openTask}
        />
      );
    }
    return "";
  };

  return (
    <Accordion className="task-list">
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>On-Going</b></Accordion.Header>
        <Accordion.Body className="task-list-body">
          <ListGroup as="ul">
            {data.map((item) => getItemOfStatus(item, Status.ONGOING))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Open</b></Accordion.Header>
        <Accordion.Body className="task-list-body">
          <ListGroup as="ul">
            {data.map((item) => getItemOfStatus(item, Status.OPEN))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><b>Completed</b></Accordion.Header>
        <Accordion.Body className="task-list-body">
          <ListGroup as="ul">
            {data.map((item) => getItemOfStatus(item, Status.COMPLETED))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

TaskGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  openTask: PropTypes.func.isRequired
};
