// @flow
import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST } from './constants';
// import { loginApi } from "./services";

type LoginAction =  {
    type: LOGIN_SUCCESS,
    payload: any,
};

type Action = LoginAction;

interface signIn {
    email: string;
    password: string;
}

export const login_request = (infoLogin: signIn): LoginAction => ({
    type: LOGIN_REQUEST,
    payload: infoLogin,
});

export const login_success = (infoUser: any): LoginAction => ({
    type: LOGIN_SUCCESS,
    payload: infoUser,
});

export const login_error = (error: any) => ({
    type: LOGIN_ERROR,
    error,
});

// export const loginPage = (info) => async (dispatch) => {
//     dispatch(login_request());
//     await loginApi(info, dispatch);
// };


export const fetchUser = (username: string) => ({
    type: 'FETCH_USER',
    payload: username,
});

export const fetchUserFulfilled = (data: any) => ({
    type: 'FETCH_USER_FULFILLED',
    payload: data,
});

export const fetchUserCancel = () => ({
    type: 'FETCH_USER_CANCELLED',
});
