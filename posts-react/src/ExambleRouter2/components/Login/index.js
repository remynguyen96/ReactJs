import React from 'react';
import Proptypes from 'prop-types';
import LoginComponent from './Login'

class FormLogin extends React.Component {
    render() {
        const { message, valuePassword, valueEmail, email, password, submitForm, resetForm, checkLogin } = this.props;
        return (
            <LoginComponent>
                <form onSubmit={e => submitForm(e)}>
                    <div className={`part-login`}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' value={valueEmail} onChange={e => email(e)} />
                    </div>
                    <div className={`part-login`}>
                        <label htmlFor="pass">Password</label>
                        <input type="password" name='password' value={valuePassword} id='pass' onChange={e => password(e)} />
                    </div>
                    <div className={`part-login`}>
                        <button type='submit' disabled={checkLogin}>Login Form</button>
                        <button type='button' onClick={() => resetForm()}>Reset Form</button>
                    </div>
                    <div className={`part-login`}>
                        <p className={`errors`}>{message}</p>
                    </div>
                    {
                        checkLogin && (
                            <div className={`part-login`}>
                               <h4 className={`loading `}>LOADING.........</h4>
                            </div>
                        )
                    }
                </form>
            </LoginComponent>
        )
    }
}

FormLogin.propTypes = {
    email: Proptypes.func.isRequired,
    password: Proptypes.func.isRequired,
    submitForm: Proptypes.func.isRequired,
    resetForm: Proptypes.func.isRequired,
    checkLogin: Proptypes.bool.isRequired,
    valueEmail: Proptypes.string.isRequired,
    valuePassword: Proptypes.string.isRequired,
    message: Proptypes.string.isRequired,
};


FormLogin.defaultProps = {
    valueEmail: '',
    valuePassword: '',
    message: '',
    checkLogin: false,
};

export default FormLogin;

