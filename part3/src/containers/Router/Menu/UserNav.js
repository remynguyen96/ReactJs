import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  .activePage {
     background: #5AFF8F;
  color: #ffffff;
  padding: 12px; 
  }
`;

const UserNav = ({ match }) => (
    <Wrapper>
        <NavLink to={match.path} exact activeClassName='activePage' >Browser</NavLink>
        <NavLink to={`${match.path}/add`} activeClassName='activePage' >Add</NavLink>
    </Wrapper>
);

export default withRouter(UserNav);
