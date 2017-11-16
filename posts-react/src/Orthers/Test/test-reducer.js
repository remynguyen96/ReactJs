import {RECEIVE_TEST, GET_PERSON} from './test-action';

export const reducers1 =  (state = "", action) => {
    switch(action.type) {
        case RECEIVE_TEST:
            return action.text;
        default: return state;
    }
}

export const reducers2 =  (state = {}, action) => {
    switch(action.type) {
        case GET_PERSON:
            return action.data;
        default: return state;
    }
}