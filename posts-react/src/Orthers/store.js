import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import reducers from './reducer';
import {getPosts} from './fixtures'
import mySaga from './saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));
// sagaMiddleware.run(mySaga);

store.dispatch({
    type: 'RECEIVE_DATA',
    payload: getPosts(),
});

export default store;