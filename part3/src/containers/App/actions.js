import * as action from './constants';

export const getTodo = (data) => ({
    type: action.GET_TODO,
    data,
});

export const addTodo = (data) => ({
    type: action.ADD_TODO,
    data,
});

export const editTodo = (data) => ({
    type: action.EDIT_TODO,
    data,
});


export const deleteTodo = (data) => ({
    type: action.DELETE_TODO,
    data,
});





