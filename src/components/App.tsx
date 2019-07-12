import * as React from "react";
import HomePage from "./pages/home-page";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  public render() {
    return <HomePage />;
  }
}
