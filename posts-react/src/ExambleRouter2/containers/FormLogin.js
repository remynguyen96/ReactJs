import React from 'react';
import Proptypes from 'prop-types';
import LoginComponent from '../components/Login'

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { email, email2, password, password2, submitForm } = this.props;
        return (
            <LoginComponent>
                <form onSubmit={(e) => submitForm(e)}>
                    <div className={`part-login`}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' value={email} onChange={(e) => email2(e)} />
                    </div>
                    <div className={`part-login`}>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name='pass' id='pass' value={password} onChange={(e) => password2(e)} />
                    </div>
                    <div className={`part-login`}>
                        <button type='submit'>Login Form</button>
                    </div>
                </form>
            </LoginComponent>
        )
    }
}

FormLogin.propTypes = {
    email: Proptypes.string,
    password: Proptypes.string,
    submitForm: Proptypes.func,
}
FormLogin.defaultProps = {
    email: '',
    password: '',
}

export default FormLogin;
