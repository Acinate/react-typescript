
import { hot } from "react-hot-loader/root";
import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './../assets/scss/site.scss';

import SiteLayout from './../layouts/Site';
import AuthLayout from './../layouts/Auth';

const App = () => (<BrowserRouter>
  <Switch>
    <Route path="/site" component={SiteLayout} />
    <Route path="/auth" component={AuthLayout} />
    <Route path="*" component={SiteLayout} />
  </Switch>
</BrowserRouter>);

export default hot(App);