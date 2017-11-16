import { createSelector } from 'reselect';

const foodList = () => (state) => state.get('foods');

const makeSelectorFood = () => createSelector(
    foodList(),
    (substate) => substate.get('listData'),
);

export default makeSelectorFood;