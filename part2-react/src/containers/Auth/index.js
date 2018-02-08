import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import Wrapper from './Wrapper';
import Login from '../Login';
import SignUp from '../SignUp';
import HeaderLink from '../../components/Header/HeaderLink';
import router from '../../utils/routes';

class Auth extends Component {


    templateLinkAuth = (link, name) => {
        return (
            <HeaderLink to={link} className='auth-link'>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                <span>{name}</span>
            </HeaderLink>
        )
    };

    render() {
        const { match }  = this.props;
        const linkAuth = match.path === router.login ? this.templateLinkAuth(router.signUp ,'Sign Up') : this.templateLinkAuth(router.login ,'Login');
        return (
            <Wrapper>
                <HeaderLink to={router.homepage} className='back-link'>
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    <span>Homepage</span>
                </HeaderLink>
                {linkAuth}
                <Switch>
                    <Route path={router.login} component={Login}/>
                    <Route path={router.signUp} component={SignUp}/>
                </Switch>
            </Wrapper>
        )
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);


