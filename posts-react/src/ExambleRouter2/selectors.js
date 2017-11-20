import {createSelector} from 'reselect';

const makeSelectorMenu = (state) => createSelector(
    (state) => state.menu,
    (menu) => menu
);

export {
    makeSelectorMenu
}