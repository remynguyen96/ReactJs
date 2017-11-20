import {call, put, takeLatest, select, fork, cancel, take} from 'redux-saga/effects';
import {menuApi, loginApi} from './api';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions';
import * as selector from './selectors'



function* checkLogin() {
  try {
    const dataLogin = yield select(selector.getDataLogin);
    const login = yield call(loginApi(dataLogin));
    console.log(login);
    return dataLogin;
  } catch(err) {
      console.log(err);
      console.log(err.message);
  }
}

function* getMenu() {
    try {
        const dataMenu = yield call(menuApi);
        if(dataMenu.length > 0) {
            return yield put(actions.getApiMenu(dataMenu));
        }
    } catch (err) {                                           
        console.log(err);
    }
}

export default function* onLoadWatcher() {
    // yield fork(getMenu);
    const watcher = yield takeLatest(actions.CALL_API_MENU, getMenu);
    const watcher2 = yield takeLatest(actions.LOGIN, checkLogin);
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
    yield cancel(watcher2);
}

