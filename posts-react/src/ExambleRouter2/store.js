import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(mySaga);

export default store;