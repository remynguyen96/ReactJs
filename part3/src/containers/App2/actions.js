import * as TYPE from './constants';
import {fetchRoomsApi, loginApi} from './api';

/**
 * @Description: Auth
 */
const authenticating = () => ({
    type: TYPE.AUTH_REQUEST,
});
const authenticate = (userData) => ({
    type: TYPE.AUTH_SUCCESS,
    payload: userData,
});
const authError = (err) => ({
    type: TYPE.AUTH_FAILURE,
    err: 'Failed to authenticate',
    payload: err,
});

export const login = (dispatch) => {
    dispatch(authenticating());
    return loginApi().then((user) => dispatch(authenticate(user)));
};
/**
 * @Description: Room
 */


const fethingRooms = () => ({
    type: TYPE.ROOMS_REQUEST,
});
const roomsSuccess = (roomsList) => ({
    type: TYPE.ROOMS_SUCCESS,
    payload: roomsList,
});
const roomsError = (err) => ({
    type: TYPE.ROOMS_FAILURE,
    err: 'Failed to fetch rooms',
    payload: err,
});

export const fetchRooms = (dispatch) => {
    dispatch(fethingRooms());
    return fetchRoomsApi().then((rooms) => dispatch(roomsSuccess(rooms)));
};