import { ofType, combineEpics } from 'redux-observable';
import { map, takeUntil, switchMap, pluck } from 'rxjs/operators';
import { LOGIN_ERROR, LOGIN_REQUEST } from './constants';
import { login_success } from "./actions";
import Api from '../../utils/api';
import { urlApi } from '../../utils/helper';

const loginApi = (action$, _, { postApi }) => (
    action$.pipe(
        ofType(LOGIN_REQUEST),
        switchMap(action => {
            return postApi(`${urlApi}/${Api.login}`, action.payload).pipe(
                pluck('response'),
                map(response => login_success(response)),
                takeUntil(action$.ofType(LOGIN_ERROR)),
            );
        })
    )
);

export default combineEpics(
    loginApi,
);


// const fetchUserEpic = (action$, store, { getJSON }) =>
//     action$.pipe(
//         ofType('FETCH_USER'),
//         switchMap(action => {
// store.getState());
// store.dispatch(login_request());
// return getJSON(`http://localhost:4500/api/${action.payload}`).pipe(
//          delay(1500),
//          map(response => fetchUserFulfilled(response)),
// catch(error => of({
//    type: 'FETCH_USER_REJECTED',
//    payload: error.xhr.response,
//    error: true
// })),
// takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
// );
// })
// );
