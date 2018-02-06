// import services from './services';
import * as TYPE from './constants';

export const requestProduct = () => ({
    type: TYPE.PRODUCT_REQUEST,
});

export const productSuccess = (dataProduct) => ({
    type: TYPE.PRODUCT_SUCCESS,
    payload: dataProduct,
});

export const productError = (error) => ({
    type: TYPE.PRODUCT_REQUEST,
    error,
});

export const getApi = (dispatch, info) => {
    dispatch(requestProduct());

};
