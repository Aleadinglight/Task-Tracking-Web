import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import MyMenu from '../mymenu/MyMenu';
import NewTask from '../newtask/NewTask';
import TaskGroup from '../taskgroup/TaskGroup';
import './TaskView.css';

export default function TaskView() {
  const [showNewTask, setShowNewTask] = useState(false);
  const [taskProps, setTaskProps] = useState(null);
  const data = [
    {
      id: "99460a8a-93a5-11ec-b909-0242ac120002",
      name: "Read System Design book",
      description: "Finish chpt.4 Rate Limiter",
      due: "27-02-2022",
      priority: 0,
      status: 0,
    },
    {
      id: "01b1baa0-93a7-11ec-b909-0242ac120002",
      name: "Add MongoDB to the backend server",
      description: "Using Mongo Atlas and mongoose to configure backend server",
      due: "01-03-2022",
      priority: 2,
      status: 0,
    },
    {
      id: "472fc78a-aa5e-4bcd-8690-9607e8537596",
      name: "Learn C++",
      description: "Study multi-threaded application in C++",
      due: "20-12-2021",
      priority: 2,
      status: 1,
    },
    {
      id: "a4541eee-93a5-11ec-b909-0242ac120002",
      name: "Create UI for Task Tracking",
      description: "Update class component to function component in UI",
      due: "20-12-2021",
      priority: 1,
      status: 2,
    }
  ];
  const createNewTask = (info) => {
    setShowNewTask(false);

    if (!info) {
      return;
    }
    console.log(info);
  };

  const onNewTaskClick = () => {
    setShowNewTask(true);
    setTaskProps(null);
  };

  const openTask = (id) => {
    console.log(`open task with id:`, id);
    const task = data.find((item) => item.id === id);
    console.log(task);
    setTaskProps(task);
    setShowNewTask(true);
  };

  return (
    <Container className="dashboard-container" fluid>
      <MyMenu />
      <NewTask
        inputTask={taskProps}
        show={showNewTask}
        onHide={createNewTask}
      />
      <div className="tasklist-container">
        <Button
          variant="primary"
          className="create-task-button"
          onClick={onNewTaskClick}
        >
          <FontAwesomeIcon icon={faPlus} />
          {" "}
          <b>New Task</b>
        </Button>

        <TaskGroup
          data={data}
          openTask={openTask}
        />
      </div>
    </Container>
  );
}
