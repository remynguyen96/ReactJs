import React, {Component} from 'react';
import {connect} from "react-redux";
import Wrapper from './Wrapper';
import avatar from '../../images/img_avatar.png';

class Login extends Component {
    render() {
        return (
            <Wrapper>
                <form className="modal-content">
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar"/>
                    </div>
                    <div className="container">
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox"/> Remember me
                        </label>
                    </div>
                </form>
            </Wrapper>
        )
    }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
