import {combineReducers} from 'redux';
// import { routerReducer } from 'react-router-redux';
import appReducers from '../containers/App/reducers';

const allReducers = {
    appReducers,
};

export default combineReducers({
    ...allReducers,
    // routing: routerReducer,
});