import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import EditMovieHallBody from './editMovieHallListing/editMovieHallListing';
import {connect} from "react-redux";
import {getMoviesInSearchPage,GetMoviesHallListing,addMovie} from "../actions/pranithActions";
//import {demo} from "../actions/vishalActions";



class editMovieHallListing extends Component {
    componentWillMount()
    {
        var idgrp = (this.props.location.pathname).split('/');
        var id = idgrp[2];
        //var projName = idgrp[3];
        var idg = {
            id: id
        };
        if (id != null) {
            console.log(id);
            console.log("calling movie hall editing");

            this.props.GetMoviesHallListing(idg);
        }

    }


    // componentDidMount(){
    //     this.props.demo()
    // }

    render() {
        if (this.props.editmovies.movies.code !== 400) {
            return (
                <div>
                    <BrandBar/>
                    <MegaDropDownHeader/>

                    <EditMovieHallBody history={this.props.history} location={this.props.location}/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <BrandBar/>
                    <MegaDropDownHeader/>

                    <div>
                        Fetching Movie to Edit
                    </div>
                </div>


            )
        }
    }

}

function mapStateToProps(state) {
    return {
        movietime: state.moviesSearchPagePK,
        moviesDropdown:state.moviesDropdown,
        addMovies:state.addMovies,
        editmovies:state.editMoviehall
    }
}

    export default connect(mapStateToProps, {getMoviesInSearchPage,GetMoviesHallListing,addMovie})(editMovieHallListing);
