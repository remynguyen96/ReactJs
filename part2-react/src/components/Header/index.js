import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Wrapper from './Wrapper';
import HeaderLink from './HeaderLink';
import logo from '../../images/nodejs.png';

class Header extends Component {
    render() {
        return (
            <Wrapper>
                <HeaderLink to='/'>
                    <img src={logo} className='logo' alt="logo" />
                </HeaderLink>
                <input type="text" name="search" placeholder="Search.." />
                <HeaderLink to='/login' className='btn-login' >Login</HeaderLink>
            </Wrapper>
        )
    }
}

export default Header;
