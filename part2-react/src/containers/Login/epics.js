import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, takeUntil, delay, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/observable/dom/ajax';
import { fetchUserFulfilled } from "./actions";

const fetchUserEpic = (action$, store) =>
    action$.pipe(
        ofType('FETCH_USER'),
        switchMap(action => {
            // console.log(store.getState());
            // store.dispatch(login_request());
            return ajax.getJSON(`http://localhost:4500/api/${action.payload}`).pipe(
                     delay(1500),
                     map(response => fetchUserFulfilled(response)),
                     takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
                );
            })
        );


export default combineEpics(
    fetchUserEpic,
);
