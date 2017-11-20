export const API_MENU = "API_MENU";
export const CALL_API_MENU = "CALL_API_MENU";

// export function requestTest() {
//     return {
//         type: REQUEST_TEST,
//     }
// }

export const getApiMenu = (data) => ({
    type: API_MENU,
    data
});

export const getCallMenu = () => ({
    type: CALL_API_MENU,
})






