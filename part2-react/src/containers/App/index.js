import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Wrapper from './Wrapper';
import Auth from '../Auth';
import Homepage from '../Homepage';
import router from '../../utils/routes';

class App extends Component {

    render() {
        return (
            <Router>
                <Wrapper>
                    <Switch>
                        <Route exact path={router.homepage} component={Homepage} />
                        <Route path={router.login} component={Auth} />
                        <Route path={router.signUp} component={Auth} />
                        {/*<Route component={NotFound} />*/}
                    </Switch>
                </Wrapper>
            </Router>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


