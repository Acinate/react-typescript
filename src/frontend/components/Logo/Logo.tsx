import React from "react";

const reactIcon = require("./../../assets/img/react-icon.png");

const logoContainer: React.CSSProperties = {
  textAlign: "center"
}

const logo: React.CSSProperties = {
  maxWidth: "100%",
  userSelect: "none",
  pointerEvents: "none"
}

export default class Logo extends React.Component {
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
