/*
 *
 * Products actions
 *
 */

import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  ADD_PRODUCTS,
  ADD_PRODUCTS_SUCCESS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  API_FAIL,
  GET_PRODUCTS_SUCCESS,
} from './constants';

export function getAllProducts(products) {
  return {
    type: GET_PRODUCTS,
    products,
  };
}

export function getProductsSuccess() {
  return {
    type: GET_PRODUCTS_SUCCESS,
  };
}

export function getProduct(product) {
  return {
    type: GET_PRODUCT_DETAIL,
    product,
  };
}

export function addProduct(product) {
  return {
    type: ADD_PRODUCTS,
    product,
  };
}


export function editProduct(id, product) {
  return {
    type: EDIT_PRODUCTS,
    id,
    product,
  };
}

export function deleteProduct(idProduct) {
  return {
    type: DELETE_PRODUCTS,
    idProduct,
  };
}

export function apiError(error) {
  return {
    type: API_FAIL,
    error,
  };
}

