export const API_MENU = "API_MENU";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const RESETLOGIN = "RESETLOGIN";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const AUTH_GUARD_SUCCESS = "AUTH_GUARD_SUCCESS";
export const AUTH_GUARD_FAIL = "AUTH_GUARD_FAIL";
// export function requestTest() {
//     return {
//         type: REQUEST_TEST,
//     }
// }

export const getApiMenu = (data) => ({
    type: API_MENU,
    data
});

export const resetForm = () => ({
    type: RESETLOGIN,
});

export const changeEmail = (email) => ({
    type: CHANGE_EMAIL,
    email
});

export const changePassword = (password) => ({
    type: CHANGE_PASSWORD,
    password
});

export const loginForm = (infoLogin) => ({
   type: LOGIN,
    infoLogin,
});

export const guardSuccess = (dataGuard) => ({
    type: AUTH_GUARD_SUCCESS,
    dataGuard
});

export const guardFail = (message) => ({
    type: AUTH_GUARD_FAIL,
    message
});

export const logout = () => ({
    type: LOGOUT
});










