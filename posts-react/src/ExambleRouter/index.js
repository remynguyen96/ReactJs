import React from 'react';
import {Provider} from 'react-redux';
import {Link, BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import {fakeAuth} from './containers/Login';
// import {findDOMNode} from 'React-dom';

/**
 * @Description: Container
 */

import Login from './containers/Login';
import Logout from './containers/Logout';
import SignUp from './containers/SignUp';
import Home from './containers/Home';

/**
 * @Description: Component Style
 */
import Nav from './components/Nav';
import Ul from './components/Ul';
import Li from './components/Li';
import Section from './components/Section'


const AuthButton = withRouter(({history}) => {
    return (
        fakeAuth.isAuthenticated ? (
            <div>
                <p>Ok !!!!!</p>
                <button onClick={() => {
                    fakeAuth.signOut(() => history.push('/router/logout'))
                }}>Sign Out
                </button>
            </div>
        ) : (
            <div>
                <button onClick={() => {
                    fakeAuth.authenticate(() => history.push('/router/protected'))
                }}> Login
                </button>
                You're not logged in !!!
            </div>
        )
    )
});

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => {
        return (
            fakeAuth.isAuthenticated ? (
                <Component {...props}/>
            ) : (
                <Redirect to={{
                    pathname: '/router/login',
                    state: {from: props.location}
                }}/>
            )
        )
    }}/>
);

const Protected = () => <h3>Protected</h3>


class ExambleRouter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Nav>
                        <AuthButton/>
                        <Ul>
                            <Li>
                                <Link className='linkRef' to='/router'>Home</Link>
                            </Li>
                            <Li>
                                <Link className='linkRef' to='/router/login'>Login</Link>
                            </Li>
                            <Li>
                                <Link className='linkRef' to='/router/sign-up'>Sign Up</Link>
                            </Li>
                            <Li>
                                <Link className='linkRef' to='/router/logout'>Logout</Link>
                            </Li>
                            <Li>
                                <Link className='linkRef' to='/router/protected'>protected</Link>
                            </Li>
                        </Ul>
                    </Nav>
                    <Section>
                        <Route exact path='/router' component={Home}/>
                        <Route path='/router/login' component={Login}/>
                        <Route path='/router/logout' component={Logout}/>
                        <Route path='/router/sign-up' render={props => {
                            return (
                                <SignUp />
                            )
                        }} />
                        <PrivateRoute path='/router/protected' component={Protected}></PrivateRoute>
                    </Section>
                </div>
            </Router>
        )
    }
}

export default () => (
    <ExambleRouter/>
);