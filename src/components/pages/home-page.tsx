import * as React from "react";
import RegisterForm from "./../forms/register-form/register-form";
import WelcomeHeading from "./../headings/welcome-heading/welcome-heading";

export interface IHomePageProps {}

export default class HomePage extends React.Component<IHomePageProps> {
  public render() {
    return (
      <main className="home-page">
        <WelcomeHeading />
        <RegisterForm />
      </main>
    );
  }
}
