// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';

export default function Task(props) {
  return (
    <div className="Task" draggable onClick={props.delete}>
      <h4>{props.title}</h4>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string,
  delete: PropTypes.func,
};
