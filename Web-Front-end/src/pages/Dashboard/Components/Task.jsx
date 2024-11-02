// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PopUp from '../../../components/Header/PopUp';
import TaskOpen from './TaskOpen';

export default function Task(task) {
  // const { taskId } = useParams();
  // using taskId to get Info of one task

  const [isOpened, setIsOpened] = useState(false);
  // const navigate = useNavigate();
  const OpenTask = () => {
    // <TaskOpen task = {task}/>
    // navigate(`./${task.title}`);
    setIsOpened(true);
    console.log('open pop up');
  };

  useEffect(() => {});

  return (
    <>
      <div className="Task" draggable onClick={OpenTask}>
        <h4>{task.title}</h4>
      </div>
      <PopUp trigger={isOpened}>
        <TaskOpen delete={task.delete} />
      </PopUp>
    </>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  delete: PropTypes.func,
};
