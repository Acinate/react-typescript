import React from 'react';
import './Logo.scss';

const reactIcon = require('assets/img/react-icon.png');

export interface ILogo {}

export default class Logo extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="logo spin-clockwise" src={reactIcon} alt="react_logo" />
      </div>
    );
  }
}
