import { take, takeLatest, call, put, cancel } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import * as typeActions from './constants';
import * as actions from './actions';
import * as services from './service';

function* getProducts() {
  try {
    const listProducts = yield call(services.getProductsApi);
    yield put(actions.getAllProducts(listProducts));
  } catch (err) {
    yield put(actions.apiError(err));
  }
}

export default function* defaultSaga() {
  const watcher1 = yield takeLatest(typeActions.GET_PRODUCTS_SUCCESS, getProducts);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher1);
}