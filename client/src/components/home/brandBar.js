import React, {Component} from 'react';
import {connect} from 'react-redux';


class BrandBar extends Component {

    render() {

        return (
            <div>

                <div id="brand-bar">
                    <div className="fandango-container">
                        <nav className="text-right">
                            <a href="/fandango-gift-cards">Gift Cards</a> |
                            <a href="/freemovietickets"> Offers</a> |
                            <a href="https://www.fandango.com/account/signin?from=%2F" className="hide-logged-in"> Sign In</a>
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

export default connect(null, null)(BrandBar);