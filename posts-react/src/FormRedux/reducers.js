import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from 'react-router-redux';
import {AUTH_FAIL, AUTH_SUCCESS} from './constants';

const initialize = {
    isAuthenticated: false,
};

const authReducer = (state = initialize, action) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
            }
        case AUTH_FAIL:
            return {
                ...state,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}


const reducers = combineReducers({
    form: formReducer,
    router: routerReducer,
    auth: authReducer,
});

export default reducers;