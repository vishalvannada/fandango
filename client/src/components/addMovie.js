import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import MovieTopSection from './addMovie/addMovieBody';
import {connect} from "react-redux";
import {demo} from "../actions/vishalActions";

class Addmovie extends Component {


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

export default connect(null, null)(Addmovie);
