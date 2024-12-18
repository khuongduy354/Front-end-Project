import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import Column from './Column';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types';

export default function Board(props) {
  const [columns, setColumns] = useState(props.columns || []);

  const AddColumn = () => {
    setColumns((prevColumns) => [
      ...prevColumns,
      {
        id: prevColumns.length + 1, // Tạo id mới dựa trên độ dài mảng // tạm thời hoy
        title: 'TO DO',
        tasks: [],
      },
    ]);
    console.log(columns);
  };

  const DeleteColumn = (id) => {
    setColumns((prevColumns) =>
      prevColumns.filter((column) => column.id !== id)
    );
    console.log(columns);
  };

  return (
    <Stack direction="column" className="Board">
      <Stack direction="row" className="Main">
        {columns.map((column) => {
          return (
            <Column
              title={column.title}
              key={column.id}
              tasks={column.tasks}
              delete={() => DeleteColumn(column.id)}
            ></Column>
          );
        })}
        <Button
          variant="contained"
          className="add_board"
          endIcon={<AddIcon />}
          sx={{
            backgroundColor: 'rgba(235, 244, 214, 0.5)',
            color: 'black',
            height: '3rem',
            width: '20rem',
          }}
          onClick={AddColumn}
        >
          New column
        </Button>
      </Stack>
    </Stack>
  );
}

Board.propTypes = {
  columns: PropTypes.array,
};
