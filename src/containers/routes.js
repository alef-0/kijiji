'use strict';

import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './App';
import Auth from '../components/auth';
import SignIn from '../containers/auth/signIn';
import SignUp from '../containers/auth/signUp';
import Profile from '../containers/profile';
import AccountDetails from '../containers/profile/accountDetails';
import Orders from '../containers/orders';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="auth/signin"/>
        <Route path="auth" component={Auth}>
            <Route path="signin" component={SignIn}/>
            <Route path="signup" component={SignUp}/>
        </Route>
        <Route path='profile' component={Profile}>
            <Route path="account" component={AccountDetails}/>
        </Route>
        <Route path="postings" component={Orders}/>
    </Route>
);
