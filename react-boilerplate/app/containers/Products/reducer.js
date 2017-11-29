/*
 *
 * Products reducer
 *
 */

import {fromJS} from 'immutable';
import * as typeActions from './constants';

const initialState = fromJS({
  listProducts: [
    {
      id: '',
      name: '',
      price: '',
      images: '',
      description: '',
      createdAt: '',
      updatedAt: '',
    },
  ],
  error: '',
  loading: false,
});

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case typeActions.GET_PRODUCTS:
      return state.set('listProducts', action.listProducts);
    default:
      return state;
  }
}

export default productsReducer;
