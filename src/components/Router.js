import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import Profile from './Profile';
import ExhibitSample from './ExhibitSample';
import NotFound from './NotFound';

 const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/exhibit/:exhibitId" component={Profile} />
        <Route exact path="/exhibit-sample/" component={ExhibitSample} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );

  export default Router;