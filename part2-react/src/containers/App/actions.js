import * as TYPE from './constants';
import {loginApi} from './services';
import constants from '../../utils/constants';
import {saveLocal} from '../../utils/helper';

const loginRequest = () => ({
   type: TYPE.USER_LOGIN_REQUEST,
});

const loginSuccess = (infoUser) => ({
   type: TYPE.USER_LOGIN_SUCCESS,
   payload: infoUser,
});

const loginError = (error) => ({
    type: TYPE.USER_LOGIN_ERROR,
    error,
});

export const loginUser = async (dispatch, dataLogin) => {
    dispatch(loginRequest());
    const resultInfo = await loginApi(dataLogin);
    const { refreshToken, accessToken, avatar, email, id, expToken, name, intro } = resultInfo;
    const infoUser = { id, name, avatar, email, intro, expToken };
    saveLocal(constants.accessToken, accessToken);
    saveLocal(constants.refreshToken, refreshToken);
    saveLocal(constants.userInfo, JSON.stringify(infoUser));
    dispatch(loginSuccess(resultInfo));
};
