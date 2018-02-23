import store from '../AppRoot/store';
import { timer } from 'rxjs/observable/timer';
import 'rxjs/add/operator/map';
import { GET_LOGGED_USER, SET_LOGGED_USER } from './constants';

export const getLoggedUser = () => (
    timer(1500).subscribe(() => (
        store.dispatch({
            type: GET_LOGGED_USER
        })
    ))
);

export const auth = (status) => (
    timer(1000).map(_ => (
        store.dispatch({
            type: SET_LOGGED_USER,
            logged: status
        })
    ))
);
