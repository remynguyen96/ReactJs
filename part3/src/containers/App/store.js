import {fromJS} from 'immutable';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import Reduglogger from 'redux-logger';
import {reducers} from './reducers';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const testMiddleware = store => next => action => {
    console.log(action);
    next(action);
}

const middlewares = [
    Reduglogger,
    testMiddleware,
];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
);

const storeReducer = combineReducers({
    todo: reducers,
});

export const store = createStore(storeReducer, enhancer);
