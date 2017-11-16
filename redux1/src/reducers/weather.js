export default function weather(state = {}, action) {
    switch(action.type){
        case 'FETCH_WEATHER_DONE':
            return action.result
        default:
            return state;
    }
}