import React, {Component} from 'react';
import {connect} from 'react-redux'


class UnderBrand extends Component {

    render() {

        return (
            <div className="home-under-brand">
                <div className="fandango-container">
                    <p className ="font-condensed under-brand-buy">BUY MOVIE TICKETS
                        <span className="inside-brand-buy"> SEE ALL MOVIES</span>
                    </p>
                </div>
            </div>
        )


    }
}

// function mapStateToProps(state) {
//     return {dashboard: state.dashboard}
// }

export default connect(null, null)(UnderBrand);