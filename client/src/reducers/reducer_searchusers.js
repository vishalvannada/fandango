import {SEARCH_USERS_SUCCESS,SEARCH_USERS_ERROR} from "../actions/satishActions";

export default function (state={
    message : '',
    users: ''

},action){
    console.log("inside Search users reducer",action.payload);
    switch(action.type){
        case SEARCH_USERS_SUCCESS:
            return {...state, message: action.payload.message, users: action.payload.users};
        break;
        case SEARCH_USERS_ERROR:
            return {...state, messsage: action.payload.message};
            break;
        default:
            return state;
    }
}