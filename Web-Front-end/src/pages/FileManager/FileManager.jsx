import { Stack } from '@mui/material';
import File from './Components/File';
import PropTypes from 'prop-types';

export default function FileManager(props) {
  return (
    <Stack className="FileManager">
      <h3 className="Title">FILES</h3>
      <Stack className="Files" direction="row">
        {props.files.map((file) => {
          return <File key={file.id} />;
        })}
      </Stack>
    </Stack>
  );
}

FileManager.propTypes = {
  files: PropTypes.string,
};
