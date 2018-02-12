import {LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from './constants';

const initialize = {
    id: '',
    name: '',
    email: '',
    avatar: '',
};

const reducers = (state = initialize, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return state;
        case LOGIN_SUCCESS:
            return Object.assign({}, state, action.payload);
        case LOGIN_ERROR:
            return state;
        default :
            return state;
    }
};

export default reducers;

