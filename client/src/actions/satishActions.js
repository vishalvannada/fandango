import axios from "axios";
//import {history} from "../containers/History";
export const SIGN_IN = "SIGN_IN";
export const ROOT_URL = "http://localhost:3001"


export function signin(values){
    const request = axios.post(`${ROOT_URL}/users/login`, values,{withCredentials: true} );
    request.then(function(res) {
        // console.log("res",res);
        if(res.status == 201){
            window.localStorage.setItem('user',res.data.user);
            window.localStorage.setItem('isLoggedIn',true);
            console.log("response received");
            this.history.push('/home');
        }
    });
    request.catch(function(err){
        // dtype = {message:'error received'}
         console.log("caught:",err.response);
    });
    return {
        type: SIGN_IN,
        payload: request
    }
}
