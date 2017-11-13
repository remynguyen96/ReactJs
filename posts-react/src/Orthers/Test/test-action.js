export const REQUEST_TEST = "REQUEST_TEST";
export const RECEIVE_TEST = "RECEIVE_TEST";
export const SET_PERSON = "SET_PERSON";
export const GET_PERSON = "GET_PERSON";
export function requestTest() {
    return {
        type: REQUEST_TEST,
    }
}

export function receiveTest(text) {
    return {
        type: "RECEIVE_TEST",
        text,
    }
}

/**
 * @Description: Person
 */


export function getPerson(data) {
    return {
        type: GET_PERSON,
        data
    }
}

export function setPerson() {
    return {
        type: SET_PERSON
    }
}