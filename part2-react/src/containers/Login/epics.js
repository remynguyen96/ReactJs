import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, takeUntil, delay, switchMap, pluck } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fetchUserFulfilled } from "./actions";
import { LOGIN_REQUEST } from './constants';

const fetchUserEpic = (action$, store, { getJSON }) =>
    action$.pipe(
        ofType('FETCH_USER'),
        mergeMap(action => {
            // console.log(store.getState());
            // store.dispatch(login_request());
            return getJSON(`http://localhost:4500/api/${action.payload}`).pipe(
                delay(1500),
                map(response => fetchUserFulfilled(response)),
                // catch(error => of({
                //    type: 'FETCH_USER_REJECTED',
                //    payload: error.xhr.response,
                //    error: true
                // })),
                takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
            );
        })
    );

const loginApi = (action$, _, { getApi }) => (
    action$.pipe(
        ofType(LOGIN_REQUEST),
        switchMap(action => {
            return getApi(`http://localhost:4500/api/products`).pipe(
                pluck('response'),
                map(response => fetchUserFulfilled(response)),
            );
        })
    )
);

export default combineEpics(
    fetchUserEpic,
    loginApi,
);
