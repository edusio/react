// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import App from './components/App';
import About from './components/About/index';
import Contact from './components/Contact';
import Home from './components/Home';
import NoMatch from './components/NoMatch';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />     
            <Route component={NoMatch} />
        </Switch>
    </App>;

export default AppRoutes;