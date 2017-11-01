import {REMOVE_FOOD, ADD_FOOD, SELECT_FOOD} from '../actions/actionTypes'

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_FOOD:
            return action.payload;
        case REMOVE_FOOD:
            return action.payload;
        case ADD_FOOD:
            return action.payload;
        default:
            return {};
    }
}

