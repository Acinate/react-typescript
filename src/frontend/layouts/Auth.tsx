import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routesJson from '../routes';

export interface IAuth {}

export default class Auth extends React.Component {
  getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={prop.layout + prop.path}
          />
        );
      }
      return null;
    });
  };

  render() {
    return (
      <>
        <Switch>{this.getRoutes(routesJson)}</Switch>
      </>
    );
  }
}
