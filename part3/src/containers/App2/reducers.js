import * as TYPE from './constants';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

export const auth = (state = {user: {}}, action) => {
    switch (action.type) {
        case TYPE.AUTH_REQUEST:
            return Object.assign({ isFetching: true}, state);
        case TYPE.AUTH_SUCCESS:
            return {user: action.payload, isFetching: false};
        default:
            return state;
    }
};

export const room = (state = { list: [] }, action) => {
    switch (action.type) {
        case TYPE.ROOMS_REQUEST:
            return Object.assign({ isFetching: true }, state);
        case TYPE.ROOMS_SUCCESS:
            return { list: action.payload, isFetching: false }
        default:
            return state;
    }
};


export const selectUserName = (stateAuth) => {
    const state = stateAuth.auth;
   let userTitle;
    if (state.user) {
        if (state.user.gender === 'Male') {
            userTitle = "Mr.";
        } else if (state.user.maritalStatus === 'Married') {
            userTitle = "Mrs.";
        }  else {
            userTitle = "Miss";
        }
    }
    return `${userTitle} ${state.user.firstName} ${state.user.lastName}`;
};

export const selectUserReservation = (state) => state.auth.user.reservation;
export const selectRoomList = (state) => state.room.list;

export const selectUserRoom = createSelector(
    selectUserReservation,
    selectRoomList,
    (userReservation, roomList) => {
        if (userReservation && roomList)
            return roomList.find((room) => room.id === userReservation.roomType);
    },
);

const reducers = combineReducers({
    auth,
    room,
});

export default reducers;





