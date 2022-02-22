import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function TaskItem(props) {
  const {
    id,
    name,
    priority,
    due,
    openTask
  } = props;

  const getPriorityText = () => {
    switch (priority) {
      case 0:
        return (
          <Badge bg="danger">
            High
          </Badge>
        );
      case 1:
        return (
          <Badge bg="warning">
            Medium
          </Badge>
        );
      case 2:
        return (
          <Badge bg="success">
            Low
          </Badge>
        );
      default:
        return "";
    }
  };

  return (
    <ListGroup.Item as="li" key={id}>
      <Container fluid>
        <Row>
          <Col>
            <Button
              className="task-list-name"
              variant="link"
              onClick={() => openTask(id)}
            >
              {name}
            </Button>
          </Col>
          <Col md="auto" lg="2" className="task-list-due">
            <Button
              className="task-list-due"
              variant="link"
            >
              <span>
                <FontAwesomeIcon
                  icon={faCalendarDay}
                />
                {` ${due}`}
              </span>
            </Button>

          </Col>
          <Col xs lg="1">
            <Button
              className="task-list-priority"
              variant="light"
            >
              {getPriorityText(priority)}
            </Button>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  );
}

TaskItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  due: PropTypes.node.isRequired,
  openTask: PropTypes.func.isRequired
};
