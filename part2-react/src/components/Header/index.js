import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Wrapper from './Wrapper';
import HeaderLink from './HeaderLink';
import logo from '../../images/nodejs.png';
import router from '../../utils/routes';

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <HeaderLink to={router.homepage}>
                    <img src={logo} className='logo' alt="logo" />
                </HeaderLink>
                <input type="text" name="search" placeholder="Search.." />
                <HeaderLink to={router.login} className='btn-login' >Login</HeaderLink>
            </Wrapper>
        )
    }
}

export default Header;
