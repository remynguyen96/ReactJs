import React, {Component} from 'react';
import {connect} from "react-redux";
import avatar from '../../images/img_avatar.png';
import Wrapper from './Wrapper';
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

    };

    static defaultProps = {

    };

    submitLogin = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    onChange = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    render() {
        const {email, password, remember} = this.state;
        return (
            <Wrapper>
                <form className="modal-content" onSubmit={this.submitLogin} noValidate={true}>
                    <div className="imgcontainer">
                        <img src={avatar} alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label><b>Email</b></label>
                        <Input
                            type="text"
                            name="email"
                            placeholder="Enter Email"
                            value={email}
                            required={true}
                            onChange={this.onChange}
                        />
                        <label><b>Password</b></label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            value={password}
                            // required={true}
                            onChange={this.onChange}
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


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
