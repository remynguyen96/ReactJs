import React from 'react';
import FormLogin from './FormLogin';

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
        console.log(this.state);
    }

    email = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    password = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { email, password } = this.state;
        return (
           <FormLogin email2={this.email} password2={this.password} email={email} password={password} submitForm={this.submitLogin} />
        )
    }
}

export default Login;
