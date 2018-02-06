import * as Type from './constants';

/**
 * @Description: Reducers Products
 */
const initialize = {};
const reducerProduct = (state = initialize, action) => {
    switch (action.type) {
        case Type.PRODUCT_REQUEST:
            return state;
        case Type.PRODUCT_SUCCESS:
            return state;
        default:
            return state;
    }
};

export default reducerProduct;
