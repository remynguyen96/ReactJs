import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Wrapper from './Wrapper';
import Auth from '../Auth';
import Homepage from '../Homepage';
import router from '../../utils/routes';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Wrapper>
                    <Switch>
                        <Route exact path={router.homepage} component={Homepage} />
                        <Route path={router.login} component={Auth} />
                        <Route path={router.signUp} component={Auth} />
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


