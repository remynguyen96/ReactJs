import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, takeUntil, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { fetchUserFulfilled } from "./actions";

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


export default combineEpics(
    fetchUserEpic,
);
