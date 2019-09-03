import React from "react";

export interface IFooterProps { }

const text: React.CSSProperties = {
  margin: "0",
  color: "#fff",
  textAlign: "center"
}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <footer>
        <p style={text}>React-Typescript © All Rights Reserved</p>
      </footer>
    );
  }
}
