import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import EditMovieBody from './editMovieHall/editMovieHall';
import {connect} from "react-redux";
import {demo} from "../actions/vishalActions";




class Movietime extends Component {


    // componentDidMount(){
    //     this.props.demo()
    // }

    render() {
        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <EditMovieBody history={this.props.history}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {home: state.home}
}

export default connect(null, null)(Movietime);
