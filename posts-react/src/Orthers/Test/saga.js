import {put, takeLatest, call} from "redux-saga/effects";
import {REQUEST_TEST, receiveTest, getPerson, SET_PERSON} from "./test-action";
import {fetchData} from "./api";

function* testSaga(action) {
    try {
        // yield put({
        //     type: RECEIVE_TEST,
        //     text: "Good Job Man My Saga"
        // })
        // console.log(receiveTest("good men"));
        // const data = yield call(fetchData);
        // console.log(data);
        // yield put(receiveTest(fetchData));
        yield put(receiveTest("good men"));
    } catch (err) {
        yield put(receiveTest("error"));
        // yield put({
        //     type: 'REQUEST_ERROR',
        //     message: err.message,                         
        // })
    }
}


function* getPersonSaga() {
    try {
      const data = yield call(fetchData);
      yield put(getPerson(data));
    } catch (err) {
        yield put(receiveTest('error'))
        console.log(err.message);
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_TEST, testSaga);
    yield takeLatest(SET_PERSON, getPersonSaga);
}

// inefficient way
// export default function* root() {
//     yield all([
//         fork(function1),
//         fork(function2),
//     ])
// }
//if you import with format: import * as ... from '...' then i recommend with method 2
// export default function* root() {
//     yield all([
//         ...Object.values(function1)
//     ].map(fork))
// }