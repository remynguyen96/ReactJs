/*
 *
 * Products actions
 *
 */

import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAIL,
  ADD_PRODUCTS,
  EDIT_PRODUCTS,
  DELETE_PRODUCTS,
  API_FAIL,
} from './constants';

export function getAllProducts(listProducts) {
  return {
    type: GET_PRODUCTS,
    listProducts,
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

export function editProduct(product) {
  return {
    type: EDIT_PRODUCTS,
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

