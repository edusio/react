// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import App from './components/App';
import Detail from './components/Detail';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail" component={Detail} />
            <Route component={NoMatch} />
        </Switch>
    </App>;

export default AppRoutes;