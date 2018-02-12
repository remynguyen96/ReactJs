import {fetchApi, saveLocal} from '../../utils/helper';
import Api from '../../utils/api';
import constants from "../../utils/constants";
import { login_success, login_error } from './actions';

export const loginApi = async (infoUser, dispatch) => {
    try {
        const getLogin = await fetchApi({
            url: Api.login,
            body: JSON.stringify(infoUser),
            method: 'POST',
        });
        const { status, statusText } = getLogin;
        if (status === 200 && statusText === 'OK') {
            const dataLogin = await getLogin.json();
            const { refreshToken, accessToken, expToken, id, email, name, avatar } = dataLogin;
            saveLocal(constants.accessToken, accessToken);
            saveLocal(constants.refreshToken, refreshToken);
            saveLocal(constants.userInfo, JSON.stringify({ id, email, expToken }));
            return dispatch(login_success({ id, name, email, avatar }));
        }
        return dispatch(login_error(statusText));
    } catch (err) {
        throw new Error(err);
    }
};
