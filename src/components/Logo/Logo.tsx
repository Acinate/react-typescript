import React from 'react';
import './Logo.scss';

import reactIcon from 'assets/img/react-icon.png';

const Logo = () => (
  <div className="container">
    <img className="logo spin-clockwise" src={reactIcon} alt="react_logo" />
  </div>
);

export default Logo;
