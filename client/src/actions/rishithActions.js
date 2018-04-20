import axios from 'axios';

export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';

const ROOT_URL = 'http://localhost:3001';



export function doSignUp(userdata) {
    return function (dispatch) {
        console.log("Inside the sign up actions");
        axios.post(`${ROOT_URL}/user/signup`, userdata)
            .then((res) => {
                console.log("Inside actions 'Response'-> ", res.data);
                window.localStorage.setItem('user',res.data.user);
                window.localStorage.setItem('isLoggedIn',true);
                dispatch({type:SIGN_UP_SUCCESS, payload:res.data});
            })
            .catch((error) => {
                dispatch({type:SIGN_UP_ERROR, payload:error})
            });

    }
}