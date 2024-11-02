import { Avatar, Button, Stack, TextField } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';
import AddPersonIcon from '@mui/icons-material/PersonAddAlt';
import DeadlineIcon from '@mui/icons-material/AccessAlarm';
import AttachIcon from '@mui/icons-material/Attachment';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import FollowIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskOpen(task) {
  // const navigate = useNavigate();
  // const location = useLocation();
  const Close = () => {
    // const baseUri = location.pathname.split('/')[1];
    // navigate(`/${baseUri}`); // navigate user to previous page
  };
  return (
    <div className="TaskOpen">
      <Button
        onClick={Close}
        sx={{
          position: 'absolute',
          top: '0.6rem',
          right: '0rem',
        }}
      >
        X
      </Button>

      <Stack
        direction="column"
        sx={{
          backgroundColor: 'white',
          borderRadius: '10px',
          height: '56rem',
          width: '72rem',
          padding: '1rem 4rem 0 4rem',
        }}
      >
        <Stack className="task-header">
          <h2>Update System</h2>
        </Stack>
        <Stack
          className="task-body"
          direction="row"
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Stack className="task-main" sx={{ gap: '1.2rem' }}>
            <label>Description</label>
            <TextField
              variant="outlined"
              sx={{
                height: '2rem',
                width: '40rem',
                backgroundColor: 'rgba(217, 217, 217, 217, 0.7)',
              }}
            />
            <br />
            <label>Discuss</label>
            <Stack direction="row" sx={{ height: '0.8rem', width: '40rem' }}>
              <Avatar />
              <TextField
                variant="outlined"
                sx={{
                  backgroundColor: 'rgba(217, 217, 217, 217, 0.7)',
                }}
              />
            </Stack>
            {/* <label>Discuss</label> */}
          </Stack>
          <Stack
            className="task-method"
            sx={{
              gap: '1.5rem',
            }}
          >
            <Button
              className="task-button"
              variant="contained"
              startIcon={<AddPersonIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Join in
            </Button>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<DeadlineIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Deadline
            </Button>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<AttachIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Attach
            </Button>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<ShareIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Share
            </Button>
            <br />
            <label>Others</label>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<EditIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Edit
            </Button>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<FollowIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              Follow
            </Button>
            <Button
              className="task-button"
              variant="contained"
              startIcon={<DeleteIcon />}
              color="rgba(217, 217, 217, 217, 0.7)"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
              onClick={task.delete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
