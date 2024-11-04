// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import TaskOpen from './TaskOpen';
import Modal from '@mui/material/Modal';

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

  const Close = () => {
    setIsOpened(false);
  };

  useEffect(() => {});

  return (
    <>
      <div className="Task" draggable onClick={OpenTask}>
        <h4>{task.title}</h4>
      </div>
      <Modal
        open={isOpened}
        onClose={Close}
        sx={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TaskOpen
          delete={task.delete}
          onClose={Close}
          sx={{ position: 'relative' }}
        />
      </Modal>
    </>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  delete: PropTypes.func,
};
