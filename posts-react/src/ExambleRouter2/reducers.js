import {combineReducers} from 'redux';
import * as actions from './actions';
import {fromJS} from 'immutable'


const menu = (state = {}, action) => {
    switch (action.type) {
        case actions.API_MENU:
            return action.data;
        default:
            return state;
    }
}

const initialState = fromJS({
    email: '',
    password: '',
});


const login = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_EMAIL:
            return state.set('email', fromJS(action.email));
        case actions.CHANGE_PASSWORD:
            return state.set('password', fromJS(action.password));
        case actions.LOGIN:
            return action.dataLogin;
        case actions.RESETLOGIN:
            return state
                .set('email', fromJS(''))
                .set('password', fromJS(''));
        default:
            return state;
    }
};


export default combineReducers({
    menu,
    login,
});