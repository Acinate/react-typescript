import React from 'react';

import { Route, Switch } from 'react-router-dom';

import routesJson from '../routes';
import BNavbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export interface ISiteLayout {}

export default class Site extends React.Component {
  getRoutes = (routes) => {
    return routes.map((prop) => {
      if (prop.layout === '') {
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
      <div className="site">
        <div className="app-navbar">
          <BNavbar />
        </div>
        <div className="app-content">
          <Switch>{this.getRoutes(routesJson)}</Switch>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    );
  }
}
