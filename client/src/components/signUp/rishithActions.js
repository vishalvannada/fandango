import axios from 'axios';
import {ROOT_URL} from '../../actions/vishalActions';



export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';



export function doSignUp(userdata) {
    return function (dispatch) {
        console.log("Inside the sign up actions");
        axios.post(`${ROOT_URL}/signup`, userdata)
            .then((res) => {
                console.log("Inside actions 'Response'-> ", res.data);
                dispatch({type:SIGN_UP_SUCCESS, payload:res.data});
            })
            .catch((error) => {
                dispatch({type:SIGN_UP_ERROR, payload:error})
            });

    }
}