import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import MovieTopSection from './movietime/movieTimeTheatre';
import {connect} from "react-redux";
//import {demo} from "../actions/homeActions";



class Movietime extends Component {


    // componentDidMount(){
    //     this.props.demo()
    // }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <MovieTopSection/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(null, null)(Movietime);
