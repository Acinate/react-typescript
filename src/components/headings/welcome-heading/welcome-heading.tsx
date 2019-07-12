import * as React from "react";

export interface IWelcomeHeadingProps {}

export default class WelcomeHeading extends React.Component<
  IWelcomeHeadingProps
> {
  public render() {
    return <h1>Welcome to my app!</h1>;
  }
}
