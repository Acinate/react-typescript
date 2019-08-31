import * as React from "react";

export interface IRegister {}

export default class Register extends React.Component {
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
          <div className="input-group">
            <label>Confirm Password</label>
            <input type="text" />
          </div>
          <button>Register</button>
        </form>
      </div>
    );
  }
}