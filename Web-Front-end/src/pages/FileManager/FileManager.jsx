import { Stack } from '@mui/material';
import File from './Components/File';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

export default function FileManager(props) {
  // const { projectName } = useParams();
  // depend on projectName to render relevant {files} instead of using props
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
  files: PropTypes.array,
};
