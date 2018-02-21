// @flow
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from './constants';
import { loginApi } from "./services";

type LoginAction =  {
    type: LOGIN_SUCCESS,
    payload: any,
};

type Action = LoginAction;

export const login_request = () => ({
    type: LOGIN_REQUEST,
});

export const login_success = (infoLogin: any): LoginAction => ({
    type: LOGIN_SUCCESS,
    payload: infoLogin,
});

export const login_error = (error) => ({
    type: LOGIN_ERROR,
    error,
});

export const loginPage = (info) => async (dispatch) => {
    dispatch(login_request());
    await loginApi(info, dispatch);
};


export const fetchUser = (username) => ({
    type: 'FETCH_USER',
    payload: username,
});

export const fetchUserFulfilled = (data) => ({
    type: 'FETCH_USER_FULFILLED',
    payload: data,
});

export const fetchUserCancel = () => ({
    type: 'FETCH_USER_CANCELLED',
});