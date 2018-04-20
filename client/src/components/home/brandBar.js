import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {signout} from "../../actions/satishActions";


class BrandBar extends Component{

    handleSignout(){
        this.props.signout(null);
    }


    render() {
        var isLoggedIn = window.localStorage.getItem('isLoggedIn');

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

// function mapStateToProps(state) {
//     return {dashboard: state.dashboard}
// }

export default connect(null,{signout})(BrandBar);