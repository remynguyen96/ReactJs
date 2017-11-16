import React, {Component} from 'react';
import './auth.css';

class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    handleLogout = () => {
        this.setState({isLoggedIn: false});
    }

    handleLogin = () => {
        this.setState({isLoggedIn: true});
    }

    render() {
        let myBtn;
        let title;
        myBtn = this.state.isLoggedIn
            ? <button className='logout' onClick={this.handleLogout}>Logout</button>
            : <button className='login' onClick={this.handleLogin}>Login</button>
        title = this.state.isLoggedIn ? <h4>You Had Login Successful !</h4> : <h4>You Had Logout Successful !</h4>
        return (
            <div className='auth'>
                {title}
                {/*{this.state.isLoggedIn ? <h4>You Had Login Successful !</h4> : <h4>You Had Logout Successful !</h4>}*/}
                {myBtn}
                {/*{this.state.isLoggedIn ? <button className='logout' onClick={this.handleLogout}>Logout</button> : <button className='login' onClick={this.handleLogin}>Login</button> }*/}

                {this.state.isLoggedIn ? <h4>Successful !</h4> : <h4>Logout Successful</h4>}
            </div>
        )
    }
}


class Mail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Mail statistics</h1>
                {this.props.newMessages.length > 0 &&
                  <p>You have <strong>{this.props.newMessages.length}</strong> new Message</p>
                }
            </div>
        )
    }
}

export default Auth;
// export default Mail;
