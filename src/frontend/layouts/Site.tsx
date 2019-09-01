import * as React from "react";

import { Route, Switch } from "react-router-dom";

import routes from "./../routes"
import Footer from "./../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";

export interface ISiteLayout { }

export default class Site extends React.Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null;
      }
    })
  }
  render() {
    return (
      <>
        <div className="app-navbar">
          <Navbar />
        </div>
        <div className="app-content">
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </>
    );
  }
}
