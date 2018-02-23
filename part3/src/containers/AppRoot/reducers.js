import { fromJS } from 'immutable';
import { GET_LOGGED_USER, SET_LOGGED_USER } from './constants';

const initialize = fromJS({
    pending: false,
    logged: true,
});

const reducers = (state = initialize, actions) => {
    switch (actions.type) {
        case GET_LOGGED_USER:
            return state.set('pending', false);
        case SET_LOGGED_USER:
            return state.set('pending', true).set('logged', actions.logged);
        default:
            return state;
    }
};

export default reducers;
