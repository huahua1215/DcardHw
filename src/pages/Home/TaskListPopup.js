import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';

function TaskListPopup() {
  const history = useHistory();

  useEffect(() => {
    const popup = window.open('', 'Task List', 'width=800,height=600');
    if (popup) {
      popup.document.title = 'Task List';
      popup.document.body.innerHTML = '<div id="task-list"></div>';

      ReactDOM.render(
        <TaskList />,
        popup.document.getElementById('task-list')
      );
    } else {
      alert('Please allow pop-ups for this website');
    }

    history.replace('/');
  }, [history]);

  return null;
}

export default TaskListPopup;


