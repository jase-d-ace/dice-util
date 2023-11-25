import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Search from './Search';
import Initiatives from './Initiatives';
import Nav from './Nav';

function Router() {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/initiatives" component={Initiatives} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
