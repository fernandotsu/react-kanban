import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/Home/home';
import Signin from './pages/Login/signin';
import Signup from './pages/Login/signup';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Redirect from='*' to='/' />
        </Switch>
    </BrowserRouter>
);

export default Routes;