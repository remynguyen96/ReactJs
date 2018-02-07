import {fromJS} from 'immutable';
import {createStore, applyMiddleware, compose} from 'redux';
import Reduglogger from 'redux-logger';
import reducers from './reducers';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const middlewares = [
    Reduglogger,
];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

export const store = createStore(reducers, enhancer);
