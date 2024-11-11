import { useState } from 'react';
import Board from './Components/Board';
import { MenuItem, Select, Stack } from '@mui/material';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

export default function Dashboard({ boards }) {
  // const { projectName } = useParams();
  // depend on projectName to get relevant {boards} instead of using props inside
  const [boardId, setBoardID] = useState(1);

  const handleChange = (e) => {
    setBoardID(e.target.value);
  };
  return (
    <div>
      <div className="main">
        <Stack className="TeamThree" direction="row">
          <Select
            value={boardId}
            onChange={handleChange}
            className="BoardSelect"
            sx={{
              border: '',
              '& fieldset': { border: 'none' },
              fontSize: '1.6rem',
            }}
          >
            {boards.map((board) => {
              return (
                <MenuItem key={board.id} value={board.id}>
                  {board.title}
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
        <Board key={boardId} columns={boards[boardId - 1].columns}></Board>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  boards: PropTypes.array,
};
