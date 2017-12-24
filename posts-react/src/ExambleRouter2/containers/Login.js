import React from 'react';
import FormLogin from '../components/Login/';
import {makeSelectorLogin, makeSelectorGuard} from '../selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as actions from '../actions';
import {Redirect} from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    submitLogin = (event) => {
        event.preventDefault();
        this.props.onSubmitForm(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        if(e.target.name === 'email') {
            this.props.changeEmail(e.target.value);
        }
        if(e.target.name === 'password') {
            this.props.changePassword(e.target.value);
        }
    }

    resetForm = () => {
        this.setState({
            email: '',
            password: '',
        });
        this.props.resetForm();
    }

    render() {
        const {email, password} = this.state;
        const {loading} = this.props.dataLogin.toJS();
        const {message, guard} = this.props.guard.toJS();
        return (
            <div>
                {guard
                    ? <Redirect to={{pathname: '/router2/dashboard'}} />
                    : <FormLogin
                        checkLogin={loading}
                        valueEmail={email}
                        valuePassword={password}
                        email={this.handleChange}
                        password={this.handleChange}
                        submitForm={this.submitLogin}
                        resetForm={this.resetForm}
                        message={message}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    dataLogin: makeSelectorLogin(),
    guard: makeSelectorGuard(),
});

const mapDispatchToProps = dispatch => ({
    onSubmitForm: (data) => dispatch(actions.loginForm(data)),
    resetForm: () => dispatch(actions.resetForm()),
    changeEmail: (email) => dispatch(actions.changeEmail(email)),
    changePassword: (pass) => dispatch(actions.changePassword(pass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
