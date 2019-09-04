import React from 'react';

const reactIcon = require('./../../assets/img/react-icon.png');

const logoContainer: React.CSSProperties = {
  textAlign: 'center'
};

const logoStyles: React.CSSProperties = {
  maxWidth: '100%',
  userSelect: 'none',
  pointerEvents: 'none'
};

const Logo = () => (
  <>
    <div style={logoContainer}>
      <img
        style={logoStyles}
        className="spin-clockwise"
        src={reactIcon}
        alt="react_logo"
      />
    </div>
  </>
);

export default Logo;
