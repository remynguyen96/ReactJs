import {call, put, takeLatest, select, fork, cancel, take} from 'redux-saga/effects';
import {menuApi, loginApi} from './api';
import {LOCATION_CHANGE} from 'react-router-redux';
import * as actions from './actions';
import * as selector from './selectors'
import {isEqual} from 'lodash';


function* checkLogin() {
    try {
        const resultLogin = yield select(selector.getDataLogin);
        const login = yield call(loginApi);
        const result = {...resultLogin.toJS()};
        delete result.loading;
        if (login.length > 0 && isEqual(login[0], result)) {
            let infoResult = {
                infomation: {...result},
                message: 'Login success good boy !!!!',
            };
            return yield put(actions.guardSuccess(infoResult));
        } else {
            let message = 'Please check email and password again !';
            return yield put(actions.guardFail(message));
        }
    } catch (err) {
        console.log(err);
        console.log(err.message);
    }
}

function* logoutUser() {
    try {
        const message = 'Logout Successful !';
        return yield put(actions.guardFail(message))
    } catch(err) {
        console.log(err);
    }
}


function* getMenu() {
    try {
        const dataMenu = yield call(menuApi);
        if (dataMenu.length > 0) {
            return yield put(actions.getApiMenu(dataMenu));
        }
    } catch (err) {
        console.log(err);
    }
}

export default function* onLoadWatcher() {
    yield fork(getMenu);
    const watcher = yield takeLatest(actions.LOGIN, checkLogin);
    const watcher2 = yield takeLatest(actions.LOGOUT, logoutUser);
    yield take(LOCATION_CHANGE);
    // yield cancel(watcher);
}

