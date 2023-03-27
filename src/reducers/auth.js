import * as authActions from "../actions/auth";

export default (
    state = {
        idToken: {},
        accessToken: ""
    },
    action
) => {
    const {
        type,
        idToken,
        accessToken
    } = action;
 
    switch(type) {
        case authActions.SET_ID_TOKEN:
            return {
                ...state,
                idToken
            };
        case authActions.SET_ACCESS_TOKEN:
        return {
            ...state,
            accessToken
        }
        case authActions.CLEAR:
        return {
            idToken: {},
            accessToken : "",
        }
        default:
            return state;
    }
}