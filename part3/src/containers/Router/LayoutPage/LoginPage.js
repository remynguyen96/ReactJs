import React, {Component} from 'react';
import { auth } from '../../AppRoot/actions';
const loginPage = async (history) => {
    auth(true).subscribe(() => {
        history.push('/app');
    });
};

const LoginPage = ({ history }) => {
    return (
        <div>
            <h3 style={{textAlign: 'center'}}>This is page Login</h3>
            <button style={{margin: '0 auto', display: 'block', background: '#36FF68', padding: '6px 25px', border: 'none', color: '#FFFFFF'}} onClick={() => loginPage(history)}>
                Login Page
            </button>
        </div>
    );
};
export default LoginPage;

