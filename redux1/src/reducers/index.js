import {combineReducers} from 'redux';
import  {routerReducer} from 'react-router-redux';
import {reducer as formReducers} from 'redux-form';
import weather from './weather';

const rootReducer = combineReducers({
    weather,
    formReducers,
    routing: routerReducer
});
export default rootReducer;
