import {BASIC_INFO_SUCCESS,BASIC_INFO_ERROR,USER_DETAILS_SUCCESS,PASSWORD_SUCCESS,PASSWORD_ERROR,EMAIL_SUCCESS,EMAIL_ERROR,SAVE_PAYMENT_SUCCESS,SAVE_PAYMENT_ERROR, DELETE_PAYMENT_ERROR,DELETE_PAYMENT_SUCCESS} from "../actions/satishActions";

export default function (state={
    firstname : '',
    lastname: true,
    displayname: '',
    address: '',
    mobile: '',
    cardname: '',
}, action){
    // if(action.error){
    //     action.type = LOGIN_ERROR;
    // }
    // console.log("Inside Reducer",action.payload);
    switch (action.type){
        case BASIC_INFO_SUCCESS:
            // sessionStorage.setItem("islogin", true);
            // sessionStorage.setItem("username", action.payload.data.username);

            return  {user: action.payload};
            break;
        case BASIC_INFO_ERROR:
            return {...state, message:action.payload.data.message };
            break;
        case USER_DETAILS_SUCCESS:
            return  {user: action.payload};
            break;
        // case SIGN_OUT:
        //     //  sessionStorage.clear();
        //     return {...state, isLoggedIn:false,  username: '' };
        //     break;
        default:
            return state;
    }

}