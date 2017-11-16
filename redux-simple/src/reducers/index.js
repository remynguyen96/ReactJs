import  FoodReducer from './foods-reducer';
import  UserReducer from './users-reducer';
import  ActiveFoodReducer from './active-food-reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    foods: FoodReducer,
    UserReducer,
    activeFood: ActiveFoodReducer,
});

export default allReducers;