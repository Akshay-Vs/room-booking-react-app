import React from 'react';
import Typography from '../Typography/Typography';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Logo.scss';

const LogoLarge = () => {
  return (
    <Typography>
      <Typography.Heading variant="h3" className="primary-color mt-0">
        <FontAwesomeIcon icon={faFeather} /> SheNest
      </Typography.Heading>
    </Typography>
  );
};

export default LogoLarge;
