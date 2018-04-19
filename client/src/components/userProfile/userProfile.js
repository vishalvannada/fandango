import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UnderBrand from '../home/underBrand';
import BrandBar from '../home/brandBar';
import MegaDropDownHeader from '../home/megaDropDownHeader';
import FandangoVIPHeader from './fandangoVIPHeader'


class UserProfile extends Component {

    constructor(props) {
        super(props);

    }


    render(){

        return(
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <FandangoVIPHeader/>




            </div>
        )
    }



}




export default UserProfile;
