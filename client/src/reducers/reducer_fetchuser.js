import {FETCH_USER, SIGN_OUT, FETCH_USER_NULL} from "../actions/satishActions";

//state may be object or array or anything that we want

export default function (state = {
    isLoggedIn: false,
    isLoggingIn: true,
    username: null
}, action) {
    // console.log("Inside Reducer",action.payload);
    switch (action.type) {
        case FETCH_USER:
            return {...state, isLoggingIn: false, isLoggedIn: true, username: action.payload.user.user};
        case FETCH_USER_NULL:
            //  sessionStorage.clear();
            return {...state, isLoggingIn: false, isLoggedIn: false, username: ''};
            break;
        case SIGN_OUT:
            //  sessionStorage.clear();
            return {...state, isLoggingIn: false, isLoggedIn: false, username: ''};
            break;
        default:
            return state;
    }
}
