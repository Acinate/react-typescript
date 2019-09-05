import React from 'react';

export interface IRegister {}

export default class Register extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="input-group">
            <label htmlFor="email">
              Email Address
              <input id="email" name="email" type="text" />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Password
              <input id="password" name="password" type="text" />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="confirm">
              Confirm Password
              <input id="confirm" name="confirm" type="text" />
            </label>
          </div>
          <button type="button">Register</button>
        </form>
      </div>
    );
  }
}
