import { combineReducers } from 'redux';
import reducerApp from '../containers/App/reducers';
import reducerProduct from '../containers/Products/reducers';

export default combineReducers({
    products: reducerProduct,
    apps: reducerApp,
});
