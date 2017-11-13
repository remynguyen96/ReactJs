import {combineReducers} from 'redux';

export const userByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return receiveData(state, action);
        default: return state;
    }
}
function receiveData(state, action) {
    const newState = {...state};
    action.payload.users.forEach((user) => {
       newState[user.id] = user;
    });
    return newState;
}

export function userListingReducer(state= {}, action) {
    switch(action.type) {
        case 'RECEIVE_DATA':
            return action.payload.users.map(x => x.id);
        default: return state;
    }
}

export function postsByIdReducer(state= {}, action) {
    switch (action.type) {
        case 'RECEIVE_DATA':
            const newState = {...state};
            action.payload.posts.forEach((post) => {
                newState[post.id] = {...post};
                //or newState[post.id] = post;
            });
            return newState;
        default: return state;
    }
}

export const postListingReducer = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_DATA':
            return action.payload.posts.map(x => x.id);
        default: return state;
    }
}

export function counterReducer(state = 1, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state+ 1;
        case 'DECREMENT':
            return state - 1;
        default: return state;
    }
}

export default combineReducers({
    userById: userByIdReducer,
    usersListing: userListingReducer,
    postsById: postsByIdReducer,
    postListing: postListingReducer,
    count: counterReducer,
});



