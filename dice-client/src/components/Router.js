import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Search from './Search';
import Nav from './Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
