import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Wrapper from './Wrapper';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from "./LayoutPage/PrimaryLayout";
import UnauthorizedLayout from "./LayoutPage/UnauthorizedLayout";

class RootRouter extends Component {
    render() {
        return (
            <Router>
                <Wrapper>
                    <Switch>
                        <Route path='/auth' component={UnauthorizedLayout}/>
                        <AuthorizedRoute path='/app' component={PrimaryLayout} />
                        <Redirect to="/auth" />
                    </Switch>
                </Wrapper>
            </Router>
        );
    }
}
export default RootRouter;
