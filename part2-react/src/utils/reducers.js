import { combineReducers } from 'redux';
import apps from '../containers/App/reducers';
import login from '../containers/Login/reducers';
// import reducerProduct from '../containers/SignUp/reducers';
import products from '../containers/Products/reducers';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    router: routerReducer,
    products,
    apps,
    login,
});
