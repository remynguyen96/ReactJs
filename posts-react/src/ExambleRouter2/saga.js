import {call, put, takeLatest, fork, cancel, take} from 'redux-saga/effects';
import {menuApi} from './api';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as actions from './actions'


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
    yield take(LOCATION_CHANGE);
    yield cancel(watcher);
}

