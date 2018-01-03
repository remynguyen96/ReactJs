import React from 'react';
import Propstypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {authFail} from '../actions';
import { push } from 'react-router-redux';

const Wrapper = styled.div`

`;

class Homepage extends React.Component {
    render() {
        return (
            <Wrapper>
                <h3>Home Page</h3>
                <button onClick={this.props.logOut}>Logout Here!</button>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
   logOut: () => {
       dispatch(authFail());
       dispatch(push('/redux-form/login'));
   }
});

export default connect(null, mapDispatchToProps)(Homepage);

