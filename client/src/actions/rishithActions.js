import axios from 'axios';
import {history} from "../App";

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

const ROOT_URL = 'http://localhost:3001';



export function doSignUp(userdata) {
    return function (dispatch) {
        console.log("Inside the sign up actions");
        axios.post(`${ROOT_URL}/user/signup`, userdata)
            .then((res) => {
                console.log("Inside actions 'Response'-> ", res.data);

                window.localStorage.setItem('isLoggedIn',true);
                history.push('/home')
                dispatch({type:SIGN_UP_SUCCESS, payload:res.data});
            })
            .catch((error) => {
              console.log("Inside error 'Response'->", error);
                dispatch({type:SIGN_UP_ERROR, payload:error})
            });

    }
}
