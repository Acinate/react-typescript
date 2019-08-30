import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/scss/site.scss";

import SiteLayout from "./layouts/Site";
import AuthLayout from "./layouts/Auth";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/site" component={SiteLayout} />
      <Route path="/auth" component={AuthLayout} />
      <Redirect from="*" to="/site" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
