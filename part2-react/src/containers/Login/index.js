import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import Wrapper from './Wrapper';
import avatar from '../../images/img_avatar.png';
import {loginPage} from './actions';
import Input from '../../components/Input';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            remember: false,
        }
    }

    static propTypes = {
        login: PropTypes.func,
    };

    static defaultProps = {
        login: () => {
        },
    };

    signIn = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const {email, password, remember} = this.state;
        return (
            <Wrapper>
                <form className="modal-content" onSubmit={this.signIn}>
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                    </div>
                    <div className="container">
                        <label><b>Email</b></label>
                        <Input type='text' placeholder="Enter Email" name="email" value={email}/>
                        <label><b>Password</b></label>
                        <Input type='password' placeholder="Enter Password" name="password" value={password}/>
                        <button type="submit">Login</button>
                        <label>
                            <Input type='checkbox' name="remember"/> Remember me
                        </label>
                    </div>
                </form>
            </Wrapper>
        )
    }
}


const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
    login(infoUser) {
        loginPage(dispatch, infoUser)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
