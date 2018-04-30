import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import MovieTopSection from './movieOverview/movieTopSection';
import CastCrewCarousel from './movieOverview/castCrewCarousel';
import {connect} from "react-redux";
import {getMovieOverview} from "../actions/vishalActions";
import MovieReview from './movieOverview/movieReviewsBottom';

var axios = require('axios');

class MovieOverview extends Component {


    componentWillMount() {
        const {tmdbid} = this.props.match.params;
        console.log(tmdbid)
        this.props.getMovieOverview(tmdbid);
        // console.log(this.props.movie.movie);

        if (this.props.user.isLoggedIn == true) {
            console.log("User Email............", this.props.user.user.email);
            var values = {username: this.props.user.user.email, status: "open", pagename: "Movietime"};

            const request =axios.post('http://localhost:3001/movietheatres/usertrack',values)
            .then(response => {
                console.log("sucessss",response.data)
            }).catch(error => {
                console.log("usertracking error",error);
            });

        }
    }

    render() {

        // console.log(this.props.movie.movie);


        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                {this.props.movie.movie.title ?
                    <MovieTopSection history={this.props.history} movie={this.props.movie.movie}/> : ''}
                {this.props.movie.movie.cast ?
                    <CastCrewCarousel cast={this.props.movie.movie.cast.concat(this.props.movie.movie.crew)}/> : ''}
                <img src="http://localhost:3000/movie-overview-hard.jpg"/>
                <MovieReview reviews={this.props.movie.movie.reviews}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.movieOverview,
        user: state.getUser
    }
}

export default connect(mapStateToProps, {getMovieOverview})(MovieOverview);

