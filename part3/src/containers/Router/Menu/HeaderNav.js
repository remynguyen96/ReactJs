import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const Wrapper = styled.div`
  
  .active {
     background: #5AFF8F;
  color: #ffffff;
  padding: 12px; 
  }
`;


const HeaderNav = () => (
    <Wrapper className="primary-header">
        <h1>Welcome to our app!</h1>
        <nav>
            <NavLink to="/app" exact activeClassName="active">Home</NavLink>
            <NavLink to="/app/users" activeClassName="active">Users</NavLink>
            <NavLink to="/app/products" activeClassName="active">Products</NavLink>
        </nav>
    </Wrapper>
);

export default HeaderNav
