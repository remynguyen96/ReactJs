import { createSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
const selectUsersDomain = (state) => state.get('users');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Users
 */

const makeSelectUsers = () => createSelector(
  selectUsersDomain,
  (substate) => substate.toJS()
);

export default makeSelectUsers;
export {
  selectUsersDomain,
};
