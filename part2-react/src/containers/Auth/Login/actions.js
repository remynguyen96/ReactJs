import {LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST} from './constants';

const login_request = () => ({
    type: LOGIN_REQUEST,
});

const login_success = (infoLogin) => ({
    type: LOGIN_SUCCESS,
    payload: infoLogin,
});

const login_error = (error) => ({
    type: LOGIN_ERROR,
    error,
});

export const login = () => {
    return (dispatch) => {
        dispatch(login_request());
    }
};