import {createStore, applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, reduxLogger];
// const middleware = [sagaMiddleware];

const store = createStore(reducers, defaultState, applyMiddleware(...middleware));

sagaMiddleware.run(mySaga);

export default store;

