import { REMOVE_FOOD, ADD_FOOD, SELECT_FOOD } from '../actions/actionTypes'
import { fromJS } from 'immutable';


const initialState = fromJS({
  listData: [],
  show: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FOOD:
      return state
        .set('show', true)
        .set('listData', action.dataFood);
    case REMOVE_FOOD:
      return state.set('listData', action.idFood);
    case ADD_FOOD:
      return state.set('listData', action.data);
    default:
      return state;
  }
}

