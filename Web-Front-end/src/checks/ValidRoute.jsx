import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ValidRoute({ projectList, children }) {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (projectList.includes(projectName)) {
      setIsValid(true);
    } else navigate('/not-found');
  }, [projectName, projectList, navigate]);

  return isValid ? children : null;
}

ValidRoute.propTypes = {
  projectList: PropTypes.array,
  children: PropTypes.node,
};
