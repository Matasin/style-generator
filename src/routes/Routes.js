import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar'
import Area from '../components/Area/Area';

import Home from '../pages/Home/Home'
import BoxShadow from '../pages/Box-Shadow/Box-Shadow'
import BorderRadius from '../pages/Border-Radius/Border-Radius'

const Routes = () => (
    <Router>
        <Navbar />
        <Area>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/box-shadow' component={BoxShadow} />
                <Route path='/border-radius' component={BorderRadius} />
            </Switch>
        </Area>
    </Router>
)

export default Routes;