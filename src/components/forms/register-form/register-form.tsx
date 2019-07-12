import * as React from "react";
import WelcomeHeading from "./../../headings/welcome-heading/welcome-heading";

export interface IRegisterFormProps {}

export interface IRegisterFormState {
  email: string;
  emailErrorMessage: string;
  name: string;
  nameErrorMessage: string;
  password: string;
  passwordErrorMessage: string;
  confirmPassword: string;
  confirmPasswordErrorMessage: string;
  formSubmitted: boolean;
  formValid: boolean;
}

export default class RegisterForm extends React.Component<
  IRegisterFormProps,
  IRegisterFormState
> {
  constructor(props: IRegisterFormProps) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      email: "",
      emailErrorMessage: "",
      name: "",
      nameErrorMessage: "",
      password: "",
      passwordErrorMessage: "",
      confirmPassword: "",
      confirmPasswordErrorMessage: "",
      formSubmitted: false,
      formValid: false
    };
  }

  submitForm(): void {
    this.setState({ formSubmitted: true });

    // Check if email is valid
    const emailValid = this.checkEmailValid(this.state.email);

    // Check if name is valid
    const nameValid = this.checkNameValid(this.state.name);

    // Check if password is valid
    const passwordValid = this.checkPasswordValid(this.state.password);

    // Check if confirmPassword is valid
    const confirmPasswordValid = this.checkConfirmPasswordValid(
      this.state.confirmPassword
    );

    if (emailValid && nameValid && passwordValid && confirmPasswordValid) {
      this.setState({
        formValid: true
      });
    }
  }

  handleInputChange(event: any): void {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "email":
        this.setState({
          email: value
        });
        this.checkEmailValid(this.state.email);
        break;
      case "name":
        this.setState({
          name: value
        });
        break;
      case "password":
        this.setState({
          password: value
        });
        break;
      case "confirmPassword":
        this.setState({
          confirmPassword: value
        });
        break;
    }
  }

  checkEmailValid(email: string): boolean {
    let message = "";
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Check if email is empty
    if (email === "") {
      message = "Email is required.";
    }
    // Check if email is valid
    else if (!re.test(String(email).toLowerCase())) {
      message = "Enter a valid email address.";
    }

    this.setState({
      emailErrorMessage: message
    });

    return message === "";
  }

  checkNameValid(name: string): boolean {
    let message = "";
    // Check if name is empty string
    if (name === "") {
      message = "Name is required";
    }

    this.setState({ nameErrorMessage: message });

    return message === "";
  }

  checkPasswordValid(password: string): boolean {
    let message = "";

    // Check if password is empty string
    if (password === "") {
      message = "Password is required.";
    }
    // Check if password is between 5 - 20 characters
    else if (password.length < 5 || password.length > 20) {
      message = "Password must be between 5 and 20 characters.";
    }
    // Check if password has atleast 1 uppercase character
    else if (password === password.toLowerCase()) {
      message = "Password must have atleast 1 uppercase character.";
    }
    // Check if password has atleast 1 symbol
    else if (!password.match(/[|\\/~^:,;?!&%$@*+]/)) {
      message = "Password must have atleast 1 symbol.";
    }

    this.setState({
      passwordErrorMessage: message
    });

    return message === "";
  }

  checkConfirmPasswordValid(password: string): boolean {
    let message = "";

    // Check if confirm password is empty string
    if (password === "") {
      message = "Password is required.";
    }
    // Check if confirm password doesn't match password
    else if (password !== this.state.password) {
      message = "Passwords must match";
    }

    this.setState({
      confirmPasswordErrorMessage: message
    });

    return message === "";
  }

  public render() {
    return (
      <form className="register-form">
        <WelcomeHeading />
        <p className="text-center">
          Enter the following information to register
        </p>
        <div className="input-group">
          <input
            id="register_email"
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleInputChange}
          />
          <div className="input-error">
            {this.state.emailErrorMessage && (
              <p>{this.state.emailErrorMessage}</p>
            )}
          </div>
        </div>
        <div className="input-group">
          <input
            id="register_name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <div className="input-error">
            {this.state.nameErrorMessage && (
              <p>{this.state.nameErrorMessage}</p>
            )}
          </div>
        </div>
        <div className="input-group">
          <input
            id="register_password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />
          <div className="input-error">
            {this.state.passwordErrorMessage && (
              <p>{this.state.passwordErrorMessage}</p>
            )}
          </div>
        </div>
        <div className="input-group">
          <input
            id="register_confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={this.handleInputChange}
          />
          <div className="input-error">
            {this.state.confirmPasswordErrorMessage && (
              <p>{this.state.confirmPasswordErrorMessage}</p>
            )}
          </div>
        </div>
        <button onClick={this.submitForm} type="button">
          Register
        </button>
        {this.state.formSubmitted && !this.state.formValid && (
          <p className="failure">Fix all errors and then try again.</p>
        )}
        {this.state.formSubmitted && this.state.formValid && (
          <p className="success">For submitted successfully.</p>
        )}
      </form>
    );
  }
}
