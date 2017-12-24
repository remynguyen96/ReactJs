import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import reducers from './reducer';
import {getPosts} from './fixtures'
import createSagaMiddleware from 'redux-saga';
import mySaga from './Test/saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
// const middlewares = [sagaMiddleware];
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(mySaga);

store.dispatch({
    type: 'RECEIVE_DATA',
    payload: getPosts(),
});

export default store;