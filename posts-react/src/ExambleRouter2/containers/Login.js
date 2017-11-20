import React from 'react';
import FormLogin from './FormLogin';
import {makeSelectorLogin} from '../selectors';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import * as actions from '../actions'

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
        })
        this.props.resetForm();
    }

    render() {
        const {email, password} = this.state;
        return (
               <FormLogin valueEmail={email} valuePassword={password} email={this.handleChange} password={this.handleChange} submitForm={this.submitLogin} resetForm={this.resetForm} />
        )
    }
}


const mapStateToProps = createStructuredSelector({
    dataLogin: makeSelectorLogin(),
});

const mapDispatchToProps = dispatch => ({
    onSubmitForm: (data) => dispatch(actions.loginForm(data)),
    resetForm: () => dispatch(actions.resetForm()),
    changeEmail: (email) => dispatch(actions.changeEmail(email)),
    changePassword: (pass) => dispatch(actions.changePassword(pass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
