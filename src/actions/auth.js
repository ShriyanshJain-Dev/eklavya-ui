export const SET_ID_TOKEN = "SET_ID_TOKEN";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const CLEAR = "CLEAR";

export function setIdToken(idToken) {
    return{
        type: SET_ID_TOKEN,
        idToken
    };
}

export function setAccessToken(accessToken) {
    return{
        type: SET_ACCESS_TOKEN,
        accessToken
    };
}

export function clear() {
    return{
        type: CLEAR
    };
}