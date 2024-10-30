import { useState } from 'react';
import Board from './Components/Board';
import { MenuItem, Select, Stack } from '@mui/material';
import PropTypes from 'prop-types';

export default function Dashboard({ boards }) {
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
            sx={{ border: 'none', '& fieldset': { border: 'none' } }}
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
