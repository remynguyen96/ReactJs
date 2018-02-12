import { createSelector } from 'reselect';

const nameUser = state => state.login.name;
const avatarUser = state => state.login.avatar;
const emailUser = state => state.login.email;

export const subtotalSelector = createSelector(
    [nameUser, avatarUser, emailUser],
    (name, avatar, email) => {
        return [name, avatar, email];
    },
);

