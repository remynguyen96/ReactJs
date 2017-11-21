import React from 'react';
import {Redirect} from 'react-router-dom'

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true,
        setTimeout(cb, 400)
    },
    signOut(cb) {
        this.isAuthenticated = false,
            setTimeout(cb, 400)
    }
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
    }

    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({
                redirectToReferrer: true
            })
        })
    }

    render() {
        // console.log(this.props);
        const {redirectToReferrer} = this.state;
        const {from} = this.props.location.state || {from: {pathname: '/'}};

        if (redirectToReferrer) {
            return (
                <Redirect to={from}/>
            )
        }
        return (
            <div>
                <h1>Login</h1>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default Login;

