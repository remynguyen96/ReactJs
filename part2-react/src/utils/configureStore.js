import {createStore, compose, applyMiddleware} from 'redux';
import ReduxLogger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import reducers from './reducers';

const configureStore = (history) => {
    const middlewares = [
        ReduxLogger,
        routerMiddleware(history),
    ];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    );

    const store = createStore(reducers, enhancer);
    return store;
};

export default configureStore;
