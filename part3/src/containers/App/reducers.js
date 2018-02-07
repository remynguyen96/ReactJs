import * as action from './constants';

const initialize = {
    name: '',
    status: '',
    time: ''
};


export const reducers = (state = initialize, actions) => {
    switch (actions.type) {
        case action.ADD_TODO:
            return Object.assign({}, actions.data);
        case action.COMPLETE_TODO:
            return state;
        case action.DELETE_TODO:
            return state;
        case action.EDIT_TODO:
            return state;
        case action.GET_TODO:
            return state;
        default:
            return state;
    }
};
