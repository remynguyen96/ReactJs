import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import Login from './Login';
import SignUp from './SignUp';
import HeaderLink from '../../components/Header/HeaderLink';


class Auth extends Component {
    render() {
        return (
            <Wrapper>
                <HeaderLink to='/'>
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                </HeaderLink>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/sign-up' component={SignUp} />
                </Switch>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


