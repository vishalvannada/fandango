import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SigninNavbar from './Signin/signinNavbar';
import SigninBody from "./Signin/signinBody";

class Signin extends Component{
    componentDidMount(){
        var logStat= window.localStorage.getItem('isLoggedIn');
        if(logStat){
            this.props.history.push('/');
        }
    }

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