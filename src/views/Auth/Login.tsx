import React from 'react';

export interface ILogin {}

export default class Login extends React.Component {
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
          <button type="button">Login</button>
        </form>
      </div>
    );
  }
}
