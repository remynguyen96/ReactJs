import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import apps from '../containers/App/reducers';
import products from '../containers/Products/reducers';
import login from '../containers/Login/reducers';


export default combineReducers({
    router: routerReducer,
    products,
    apps,
    login,
});
