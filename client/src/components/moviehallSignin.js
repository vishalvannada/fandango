import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SigninNavbar from './Signin/signinNavbar';
import MoviehallSigninForm from "./Signin/MoviehallSigninForm";
import {fetchUser} from "../actions/satishActions";

class moviehallSignin extends Component{
    componentDidMount(){
        //  this.props.fetchUser();
    }
    render(){

        return(
            <div className="site-wrap signin vipsignin">
                <SigninNavbar/>
                <div className="page registration " role="main">
                    <div className="row">
                        <div className="double-type large-8 medium-10 small-12 large-centered medium-centered small-centered columns">
                            <div className="panel-group row">
                            <MoviehallSigninForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        user: state.getUser
    })
}
export default connect(mapStateToProps,{fetchUser})(moviehallSignin);