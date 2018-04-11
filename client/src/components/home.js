import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader'
import {connect} from "react-redux";

class Home extends Component {
    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {dashboard: state.dashboard}
// }

export default connect(null, null)(Home);