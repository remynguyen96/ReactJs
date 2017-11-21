import {combineReducers} from 'redux';
import * as actions from './actions';
import {fromJS} from 'immutable';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {AUTH_GUARD} from "./actions";
import {AUTH_GUARD_FAIL} from "./actions";

const menu = (state = {}, action) => {
    switch (action.type) {
        case actions.API_MENU:
            return action.data;
        default:
            return state;
    }
}

const initialStateLogin = fromJS({
    email: '',
    password: '',
    loading: false,
});

const login = (state = initialStateLogin, action) => {
    switch (action.type) {
        case actions.CHANGE_EMAIL:
            return state.set('email', fromJS(action.email));
        case actions.CHANGE_PASSWORD:
            return state.set('password', fromJS(action.password));
        case actions.LOGIN:
            return state.set('loading', true)
                        .set('email', action.infoLogin.email)
                        .set('password', action.infoLogin.password);
        case actions.CHECK_LOGIN:
            return state;
        case actions.RESETLOGIN:
            return state.set('email', fromJS(''))
                        .set('password', fromJS(''))
                        .set('loading', fromJS(false));
        default:
            return state;
    }
};


const initialStateGuard = fromJS({
  guard: false,
  infomation: {},
  message: '',
});
export const authGuard = (state = initialStateGuard, action) => {
    switch(action.type) {
        case actions.AUTH_GUARD_SUCCESS:
            return state.set('guard', true)
                        .set('infomation', action.dataGuard.infomation)
                        .set('message', action.dataGuard.message);
        case actions.AUTH_GUARD_FAIL:
            return state.set('guard', false)
                        .set('message', action.message);
        default: return state;
    }
};

export default combineReducers({
    menu,
    login,
    authGuard,
    router: routerReducer
});