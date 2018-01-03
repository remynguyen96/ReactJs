import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { authSuccess } from '../actions';
import styled from 'styled-components';
import { push } from 'react-router-redux';

const Wrapper = styled.div`
   
`;

class Login extends React.Component {
    render() {
        return (
            <Wrapper>
                <h3>Login Page</h3>
                <button onClick={this.props.loginPage}>Login Here !</button>
            </Wrapper>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginPage: () => {
        dispatch(authSuccess());
        dispatch(push('/redux-form/homepage'));
    }
});

export default connect(null, mapDispatchToProps)(Login);
