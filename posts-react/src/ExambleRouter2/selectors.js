import {createSelector} from 'reselect';

const makeSelectorMenu = (state) => createSelector(
    (state) => state.menu,
    (menu) => menu
);

const makeSelectorLogin = (state) => createSelector(
    (state) => state.login,
    (formData) => formData,
)




const getDataLogin = state => state.login;

export {
    makeSelectorMenu,
    makeSelectorLogin,
    getDataLogin,
}