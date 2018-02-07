import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const defaultState = {};

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, reduxLogger];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);


// const middleware = [sagaMiddleware];

const store = createStore(reducers, defaultState, enhancer);

sagaMiddleware.run(mySaga);

export default store;

