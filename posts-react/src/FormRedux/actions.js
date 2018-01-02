import {AUTH_FAIL, AUTH_SUCCESS} from './constants';

export const authSuccess = () => ({
    type: AUTH_SUCCESS,
});

export const authFail = () => ({
   type: AUTH_FAIL,
});