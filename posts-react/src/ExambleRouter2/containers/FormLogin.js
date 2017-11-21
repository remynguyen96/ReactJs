import React from 'react';
import Proptypes from 'prop-types';
import LoginComponent from '../components/Login'

class FormLogin extends React.Component {
    render() {
        const { valuePassword, valueEmail, email, password, submitForm, resetForm, checkLogin } = this.props;
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
                        <button type='submit' disabled={checkLogin ? true : false}>Login Form</button>
                        <button type='button' onClick={() => resetForm()}>Reset Form</button>
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
};


FormLogin.defaultProps = {
 
}

export default FormLogin;

