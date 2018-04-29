import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';

import CancelBookingBody from './cancelMovie/cancelBookingbody';
import {connect} from "react-redux";
import {demo} from "../actions/vishalActions";




class CancelUserBooking extends Component {


    // componentDidMount(){
    //     this.props.demo()
    // }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <CancelBookingBody history={this.props.history}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(null, null)(CancelUserBooking);
