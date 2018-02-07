import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
// import mySaga from '../containers/App/saga';

const configureStore = (history) => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [
        sagaMiddleware,
        reduxLogger,
        // routerMiddleware(history),
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                shouldHotReload: false,
            }) : compose;

    // sagaMiddleware.run(mySaga);

    return createStore(
        fromJS(reducers),
        composeEnhancers(...enhancers),
    );
};

export default configureStore;

