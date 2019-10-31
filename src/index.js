// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import AppRoutes from './routes'

render(
    <Router>
        <AppRoutes />
    </Router>
    , document.getElementById('root')
);
