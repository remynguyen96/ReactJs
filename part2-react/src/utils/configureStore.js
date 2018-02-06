import {createStore, compose, applyMiddleware} from 'redux';
import ReduxLogger from 'redux-logger';
import reducers from './reducers';

const configureStore = () => {
    const middlewares = [
        ReduxLogger,
    ];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    );

    const store = createStore(reducers, enhancer);
    return store;
};

export default configureStore;
