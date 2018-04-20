import axios from "axios";
//import {history} from "../containers/History";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const ROOT_URL = "http://localhost:3001"
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";



export function signin(values){
    const request = axios.post(`${ROOT_URL}/user/signin`, values,{withCredentials:true} );
    var action_type = null;
    request.then(function(res) {
        // console.log("res",res);
        if(res.status == 201){
            window.localStorage.setItem('user',res.data.user);
            window.localStorage.setItem('isLoggedIn',true);
            console.log("response received");
            action_type= SIGN_IN;

        }
        else{
            if(res.status === 200){
                console.log("response received");
                action_type= SIGN_IN_ERROR;
            }
        }
    });
    request.catch(function(err){
        // dtype = {message:'error received'}
         console.log("caught:",err.response);
    });
    return {
        type: action_type,
        payload: request
    }

}

export function signout(values){
    console.log(values);
    const request = axios.get(`${ROOT_URL}/user/signout`,{withCredentials:true});

    console.log("Action creator called");
    console.log("request :",request);
    request.then(function(res) {
        if(res.message === "Success")
            console.log("session cleared");
            window.localStorage.clear();
    });
    return {
        type: SIGN_OUT,
        payload: request
    }
}

