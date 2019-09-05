import React from 'react';
import './Footer.scss';

export interface IFooterProps {}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    return (
      <footer>
        <p>React-Typescript © All Rights Reserved</p>
      </footer>
    );
  }
}
