import * as React from "react";

import { Container } from "react-bootstrap";

export interface IHeader { }

const reactIcon = require("./../../assets/img/react-icon.png");

const logoContainer: React.CSSProperties = {
  textAlign: "center"
}

const logo: React.CSSProperties = {
  maxWidth: "100%"
}

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div style={logoContainer}>
          <img style={logo} className="spin-clockwise" src={reactIcon} alt="" />
        </div>
      </>
    );
  }
}
