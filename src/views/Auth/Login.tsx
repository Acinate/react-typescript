import * as React from "react";

export interface ILogin {}

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <label>Email Address</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="text" />
          </div>
          <button>Login</button>
        </form>
      </div>
    );
  }
}
