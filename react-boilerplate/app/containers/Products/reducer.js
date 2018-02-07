/*
 *
 * Products reducer
 *
 */

import { fromJS } from 'immutable';
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
      return state.set('listProducts', action.products);
    case typeActions.ADD_PRODUCTS:
      return state.update('listProducts', (lists) => [action.product].concat(lists));
    case typeActions.EDIT_PRODUCTS:
      const productEdit = state.get('listProducts').find((item) => item.id === action.id);
      console.log(Object.assign({}, productEdit, action.product));
      // return state.update('listProducts', (lists) => {
      // });
      // const test = state.update('listProducts', (list) => list.find((item) => item.id === (action.id)));
      // const test = state.update('listProducts', (list) => {
      //   console.log(list);
      // });
      // const test = state.update('listProducts',
      //   (list) => list
      //     .update(list
      //     .findIndex((item) => item.id === action.id), () => ({...action.product})
      //     ));
      return state;
    case typeActions.DELETE_PRODUCTS:
      return state.update('listProducts',
            (lists) => lists.filter((product) => product.id !== action.idProduct));
    default:
      return state;
  }
}

export default productsReducer;
