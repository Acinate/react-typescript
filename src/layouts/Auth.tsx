import * as React from "React";
import { Route, Switch } from "react-router-dom";

import routes from "./../routes";
import Login from "./../views/Auth/Login";

export interface IAuth {}

export default class Auth extends React.Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
        <Switch>{this.getRoutes(routes)}</Switch>
      </>
    );
  }
}
