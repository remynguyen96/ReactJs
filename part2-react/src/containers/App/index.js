import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Wrapper from './Wrapper';
import Auth from '../Auth'
import Homepage from '../Homepage'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Wrapper>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route path='/sign-up' component={Auth} />
                        <Route path='/login' component={Auth} />
                    </Switch>
                </Wrapper>
            </BrowserRouter>

        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    // login(infoUser) {
    //     loginUser(dispatch, infoUser)
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


