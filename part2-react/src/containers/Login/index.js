import * as React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect';
import avatar from '../../images/img_avatar.png';
import Wrapper from './Wrapper';
import Input from '../../components/Input';
import {loginPage} from "./actions";
import {subtotalSelector} from './selectors';

class Login extends React.Component {

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
        // console.log(form.checkValidity());
        this.props.authLogin(this.state);
    };

    validateForm = ({email, password}) => ({
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(email),
        password: password.trim().toLowerCase() !== '' && password.trim().toLowerCase().length >= 4,
        // remember: false,
    });

    onChange = (name, value) => {
        this.setState({
            [name]: value,
        });
    };

    render() {
        // console.log(this.props.test);
        const {email: validEmail, password: validPass} = this.validateForm(this.state);
        const {email, password, remember} = this.state;
        return (
            <Wrapper>
                <form className="modal-content" onSubmit={this.submitLogin} noValidate={false}>
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
                            validate={validEmail}
                            onChange={this.onChange}
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


const mapStateToProps = state => ({
    test: subtotalSelector(state),
});

const mapDispatchToProps = dispatch => ({
    authLogin(infoUser) {
        loginPage(infoUser)(dispatch);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
