import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import EditMovieHallBody from './editMovieHallListing/editMovieHallListing';
import {connect} from "react-redux";
//import {demo} from "../actions/vishalActions";




class editMovieHallListing extends Component {


    // componentDidMount(){
    //     this.props.demo()
    // }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <EditMovieHallBody history={this.props.history} location={this.props.location}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(null, null)(editMovieHallListing);
