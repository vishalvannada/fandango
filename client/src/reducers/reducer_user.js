import {SIGN_IN,SIGN_OUT,SIGN_IN_ERROR} from "../actions/satishActions";
import {SIGN_UP_ERROR,SIGN_UP_SUCCESS} from "../actions/rishithActions";

export default function (state={
    isLoggedIn : false,
    username: '',
    message: '',
    posted: false,
    imgupload: false,
}, action){
    // if(action.error){
    //     action.type = LOGIN_ERROR;
    // }
   console.log("Inside Reducer",action.payload);
    switch (action.type){
        case SIGN_IN:
            // sessionStorage.setItem("islogin", true);
            // sessionStorage.setItem("username", action.payload.data.username);
            return  {...state, isLoggedIn:true, username: action.payload.data, };
            break;
        case SIGN_IN_ERROR:
            return {...state, isLoggedIn:false, username: '',message:action.payload.data.message };
            break;
        case SIGN_UP_SUCCESS:
            sessionStorage.setItem("islogin", true);
            sessionStorage.setItem("username", action.payload.username);
            return  {...state, isLoggedIn:true, username: action.payload.data.username};
            break;
        case SIGN_OUT:
          //  sessionStorage.clear();
            return {...state, isLoggedIn:false, username: '' };
            break;

        // case POST_PROJECT:
        //     return {...state, posted:true};
        //     break;
        // case UPDATE_PROFILE:
        //     return {...state, imgupload:true };
        //     break;
        // case FETCH_USER:
        //     console.log("user new:",action.payload.data);
        //     return {...state, isLoggedIn:true, username: action.payload.data};
        //     break;
        default:
            return state;
    }

}