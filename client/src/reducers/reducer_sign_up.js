import {SIGN_UP_SUCCESS, SIGN_UP_ERROR} from "../components/signUp/rishithActions";

export default function signUpReducer(
    state =
        {
            isSignedUp:false,
            message:"",
            error:false
        }
    , action) {

    switch (action.type){



        case SIGN_UP_SUCCESS:
            return {...state, isSignedUp: true, message:action.payload.message, error:false};

        case SIGN_UP_ERROR:
            return {...state, isSignedUp: false, message:action.payload.message, error: true};

        default:
            return state
    }


}