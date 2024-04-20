import { faFeather } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Logo.scss';

const LogoIcon = () => {
  return (
    <div className="primary-color mt-0 ">
      <FontAwesomeIcon icon={faFeather} size="3x" />
    </div>
  );
};

export default LogoIcon;
