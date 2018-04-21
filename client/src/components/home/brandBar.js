import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {signout} from "../../actions/satishActions";
import {fetchUser} from "../../actions/satishActions";



class BrandBar extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    handleSignout(){
        this.props.signout(null);
    }

    render() {
        var isLoggedIn = this.props.user.isLoggedIn;
        console.log('isloggeIn',isLoggedIn);

        return (
            <div>

                <div id="brand-bar">
                    <div className="fandango-container">
                        <nav className="text-right">
                            <a href="/fandango-gift-cards">Gift Cards</a> |
                            <a href="/freemovietickets"> Offers</a> |
                                {isLoggedIn ? (
                                    <button  className="show-logged-in" onClick={this.handleSignout.bind(this)} >
                                        Sign Out </button>
                                ) : (
                                    <Link to="/signin" className="hide-logged-in"> Sign In</Link>
                                )}
                            {/* |<a href="/signout" className="show-logged-in"> Sign Out</a>*/}
                        </nav>
                    </div>
                </div>
            </div>
        )


    }
}

function mapStateToProps(state) {
    return ({user: state.getUser})
}

function mapDispatchToProps(dispatch){
    return {
        ...bindActionCreators({
            signout, fetchUser
        },dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BrandBar);