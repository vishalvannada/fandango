import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SigninNavbar from './Signin/signinNavbar';
import SigninBody from "./Signin/signinBody";
import {signin} from "../actions/satishActions";

class Signin extends Component{

    render(){
        return(
            <div className="site-wrap signin vipsignin">
                <SigninNavbar/>
                <SigninBody/>
            </div>


        )

    }
}

export default Signin;