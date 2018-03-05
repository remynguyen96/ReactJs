import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';

const UnauthorizedLayout = (props) => {
    return (
        <div className="unauthorized-layout">
            <p>Unauthorized Layout !!!</p>
            <Switch>
                <Route path="/auth/login" component={LoginPage} />
                <Redirect to="/auth/login" />
            </Switch>
        </div>
    )
};

export default UnauthorizedLayout;
