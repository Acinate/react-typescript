import React from 'react';
import './Navbar.scss';

export interface INavbar {}

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <div className="link">React Typescript</div>
        </div>
        <div className="links">
          <div className="link">Home</div>
        </div>
      </nav>
    );
  }
}
