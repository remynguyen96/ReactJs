import {take, takeLatest, call, put, cancel, select} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as typeActions from './constants';
import * as actions from './actions';
import * as services from './service';
import * as selectors from './selectors';

function* getProducts() {
  try {
    const listProducts = yield call(services.getProductsApi);
    yield put(actions.getAllProducts(listProducts));
  } catch (err) {
    yield put(actions.apiError(err));
  }
}

function* addProducts(action) {
  try {
    // const product = yield select(selectors.makeSelectListProducts());
    console.log(action.product);
    const sendProduct = yield call(services.addProductsApi(action.product));
  } catch(err) {
    yield put(actions.apiError(err));
  }
}

export default function* defaultSaga() {
  const watcher1 = yield takeLatest(typeActions.GET_PRODUCTS_SUCCESS, getProducts);
  const watcher2 = yield takeLatest(typeActions.ADD_PRODUCTS, addProducts);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher1);
  yield cancel(watcher2);
}
