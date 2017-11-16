import {ADD_FOOD,SELECT_FOOD,REMOVE_FOOD} from './actionTypes'

export function addFood(data) {
    return {
        type: ADD_FOOD,
        data,
    }
}

export function selectFood(dataFood) {
    return {
        type: SELECT_FOOD,
        dataFood,
    }
}

export function removeFood(idFood) {
    return {
        type: REMOVE_FOOD,
        idFood
    }
}