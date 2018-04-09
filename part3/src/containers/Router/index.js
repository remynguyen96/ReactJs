import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wrapper from './Wrapper';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from "./LayoutPage/PrimaryLayout";
import UnauthorizedLayout from "./LayoutPage/UnauthorizedLayout";

class RootRouter extends Component {
    render() {
        return (
            <Wrapper>
                <Switch>
                    <AuthorizedRoute path='/app' component={PrimaryLayout} />
                    <Route path='/auth' component={UnauthorizedLayout}/>
                    <Route render={() => <div>Not Found Page...</div>}/>
                    <Redirect to="/auth" />
                </Switch>
            </Wrapper>
        );
    }
}
export default RootRouter;
