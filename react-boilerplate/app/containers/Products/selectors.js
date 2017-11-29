import { createSelector } from 'reselect';

/**
 * Direct selector to the products state domain
 */
const selectProductsDomain = (state) => state.get('products');

/**
 * Default selector used by Products
 */

const makeSelectProducts = () => createSelector(
  selectProductsDomain,
  (substate) => substate.toJS()
);

const makeSelectListProducts = () => createSelector(
  selectProductsDomain,
  (substate) => substate.get('listProducts')
);

export default makeSelectProducts;
export {
  selectProductsDomain,
  makeSelectListProducts,
};
