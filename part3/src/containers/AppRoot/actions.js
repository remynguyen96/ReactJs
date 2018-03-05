import store from '../AppRoot/store';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/map';
import { GET_LOGGED_USER, SET_LOGGED_USER } from './constants';

export const getLoggedUser = (status) => (
    timer(1000).subscribe(() => (
        store.dispatch({
            type: GET_LOGGED_USER,
            status
        })
    ))
);

export const auth = (logged) => (
    timer(400).map(() => (
        store.dispatch({
            type: SET_LOGGED_USER,
            logged
        })
    ))
);
