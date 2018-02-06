import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from './constants'

const initialState = {
    id: '',
    name: '',
    avatar: '',
    email: '',
};
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return state;
        case USER_LOGIN_SUCCESS:
            return state = action.payload ;
        default:
            return state;
    }
};

export default reducers;

