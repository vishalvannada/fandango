import {FETCH_USER,SIGN_OUT,FETCH_USER_NULL} from "../actions/satishActions";

//state may be object or array or anything that we want

export default function (state = {
    isLoggedIn : false,
    username: null
}, action) {
    console.log("Inside Reducer",action.payload);
    switch (action.type) {
        case FETCH_USER:
            return {...state, isLoggedIn:true, username: action.payload.user.user};
        case FETCH_USER_NULL:
            //  sessionStorage.clear();
            return {...state, isLoggedIn:false, username: ''};
            break;
        case SIGN_OUT:
            //  sessionStorage.clear();
            return {...state, isLoggedIn:false, username: '' };
            break;
        default:
            return state;
    }
}
