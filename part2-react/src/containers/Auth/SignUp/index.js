import React, {Component} from 'react';
import {compose} from "redux";
import Wrapper from './Wrapper';
import HeaderLink from '../../../components/Header/HeaderLink';

class SignUp extends Component {
    render() {
        return (
            <Wrapper>
                <form className="modal-content">
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>
                        <label><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email"/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw"/>
                        <label><b>Repeat Password</b></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat"/>
                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </Wrapper>
        )
    }
}
const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({

});



export default compose(mapStateToProps, mapDispatchToProps)(SignUp);
