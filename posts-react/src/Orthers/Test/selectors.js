import {createSelector} from 'reselect';

const makeSelectorTest = (state) => createSelector(
    (state) => state.test,
    (test) => test
);

const makeSelectorPerson = (state) => createSelector(
    (state) => state.person,
    (person) => person
)

export {
    makeSelectorTest,
    makeSelectorPerson,
}