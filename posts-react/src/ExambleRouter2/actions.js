export const API_MENU = "API_MENU";
export const CALL_API_MENU = "CALL_API_MENU";
export const LOGIN = "LOGIN";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const RESETLOGIN = "RESETLOGIN";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";

// export function requestTest() {
//     return {
//         type: REQUEST_TEST,
//     }
// }

export const loginForm = (dataLogin) => ({
   type: LOGIN,
    dataLogin,
});

export const checkLogin = (checkData) => ({
    type: CHECK_LOGIN,
    checkData
})

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

export const getApiMenu = (data) => ({
    type: API_MENU,
    data
});

export const getCallMenu = () => ({
    type: CALL_API_MENU,
})






