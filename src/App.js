import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React from 'react';
import DashBoard from './components/dashboard/DashBoard';
import TaskView from './components/taskview/TaskView';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/tasks">
          <TaskView />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/">
          <DashBoard />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Settings() {
  return <h2>Settings</h2>;
}

function Calendar() {
  return <h2>Calendar</h2>;
}

export default App;
