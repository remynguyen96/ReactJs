//Actions Creator
import * as allTypes from './actionTypes';
/**
 * @Description: other constants
 */
// export const VisibilityFilters = {
//     SHOW_ALL: 'SHOW_ALL',
//     SHOW_COMPLETED: 'SHOW_COMPLETED',
//     SHOW_ACTIVE: 'SHOW_ACTIVE'
// }


// export const selectFood = (food) => {
//     return {
//         type: allTypes.SELECT_FOOD,
//         payload: food
//     }
// }
export function selectFood2(food) {
    console.log(food);
    return {
        type: allTypes.SELECT_FOOD,
        payload: food
    }
}

export function addFood(food) {
    return {
        type: allTypes.ADD_FOOD,
        payload: food
    }
}
