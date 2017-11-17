import {createSelector} from 'reselect';

const makeSelectorRoot = (state) => createSelector(
    state => state.test,
    (test) => test
);

export {
    makeSelectorRoot
}