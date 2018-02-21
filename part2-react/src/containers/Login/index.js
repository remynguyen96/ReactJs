import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import avatar from '../../images/img_avatar.png';
import Wrapper from './Wrapper';
import Input from '../../components/Input';
import { loginPage } from "./actions";
import { loginUser } from './selectors';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'Cullen92@yahoo.com',
            password: '123456',
            remember: false,
        }
    }

    static propTypes = {

    };

    static defaultProps = {

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

    // refInput = (ref) => {
        // console.log(ref.validationMessage);
        // console.log(ref.validity);
        // ref.setCustomValidity('good job');
    // };

    render() {
        // console.log(this.props);
        const {email: validEmail, password: validPass} = this.validateForm(this.state);
        const {email, password, remember} = this.state;
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
                            // refInput={this.refInput}
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
                            // refInput={this.refInput}
                        />
                        <button type="submit">Login</button>
                        <label>
                            <Input
                                type="checkbox"
                                name="remember"
                                checked={remember}
                                onChange={this.onChange}
                            />
                            Remember me
                        </label>
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
    authLogin(infoUser) {
        loginPage(infoUser)(dispatch);
    }
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
