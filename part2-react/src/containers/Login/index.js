import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect';
import avatar from '../../images/img_avatar.png';
import Wrapper from './Wrapper';
import Input from '../../components/Input';
import { loginPage, fetchUser, fetchUserCancel } from "./actions";
import { loginUser } from './selectors';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    static propTypes = {

    };

    static defaultProps = {

    };

    submitLogin = (e) => {
        e.preventDefault();
        // this.props.getProduct();
        // if (this.formLogin.checkValidity()) {
        //     this.props.authLogin(this.state);
        // }
    };

    validateForm = ({email, password}) => ({
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email),
        password: password.trim().toLowerCase() !== '' && password.trim().toLowerCase().length >= 4,
    });

    onChange = (name, value) => {
        // this.props.cancelProduct();
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
        const {email: validEmail, password: validPass} = this.validateForm(this.state);
        const {email, password } = this.state;
        return (
            <Wrapper>
                <form className="modal-content"
                      onSubmit={this.submitLogin}
                      noValidate={true}
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
    },
    getProduct: () => dispatch(fetchUser('products')),
    cancelProduct: () => dispatch(fetchUserCancel()),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
