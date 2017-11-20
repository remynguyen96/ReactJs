import {combineReducers} from 'redux';
import * as actions from './actions'

const menu = (state= [], action) => {
    switch(action.type) {
        case actions.API_MENU:
            return action.data;
        default: return state;
    }
};

export default combineReducers({
    menu
});