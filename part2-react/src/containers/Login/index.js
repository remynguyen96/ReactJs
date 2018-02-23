import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import avatar from '../../images/img_avatar.png';
import Wrapper from './Wrapper';
import Input from '../../components/Input';
import { login_request } from "./actions";
import { loginUser } from './selectors';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'Cullen92@yahoo.com',
            password: '',
        }
    }

    static propTypes = {
        loginUser: PropTypes.object,
    };

    static defaultProps = {
        loginUser: {},
    };

    submitLogin = (e) => {
        e.preventDefault();
        if (this.formLogin.checkValidity()) {
            this.props.authLogin(this.state);
        }
    };

    validateForm = ({email, password}) => ({
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email),
        password: password.trim().toLowerCase() !== '' && password.trim().toLowerCase().length >= 4,
    });

    onChange = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    render() {
        const {email: validEmail, password: validPass} = this.validateForm(this.state);
        const {email, password } = this.state;
        return (
            <Wrapper>
                <form className="modal-content"
                      onSubmit={this.submitLogin}
                      noValidate={false}
                      ref={(form) => { this.formLogin = form }}
                >
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label><b>Email</b></label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            required={true}
                            validate={validEmail}
                            onChange={this.onChange}
                        />
                        <label><b>Password</b></label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            required={true}
                            validate={validPass}
                            onChange={this.onChange}
                        />
                        <button type="submit">Login</button>
                    </div>
                </form>
            </Wrapper>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    loginUser,
});

const mapDispatchToProps = dispatch => ({
    // authLogin: (infoUser) => loginPage(infoUser)(dispatch),
    authLogin: (infoUser) => dispatch(login_request(infoUser)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
