import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {withRouter} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'

import mySaga from './sagas/sagas'
import rootReducers from './reducers/index';
const defaultState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, defaultState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export const history = syncHistoryWithStore(withRouter, store);
export default store;
