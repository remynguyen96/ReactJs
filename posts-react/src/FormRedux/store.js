import {createStore, applyMiddleware, compose} from 'redux';
import reduxLogger from 'redux-logger';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

/**
 * @Description: Setup redux extentions
 */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
/**
 * @Description: Setup Saga and Logger Redux, React Router Redux
 */
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history), reduxLogger];

/**
 * @Description: Setup Store with saga middlewares and redux tools !
 */
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = createStore(reducers, enhancer);
sagaMiddleware.run(mySaga);

export default store;