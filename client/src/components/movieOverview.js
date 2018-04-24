
import React, {Component} from 'react';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import MovieTopSection from './movieOverview/movieTopSection';
import CastCrewCarousel from './movieOverview/castCrewCarousel';
import {connect} from "react-redux";
import {getMovieOverview} from "../actions/vishalActions";
import MovieReview from './movieOverview/movieReviewsBottom';

class MovieOverview extends Component {


    componentWillMount() {
        const {tmdbid} = this.props.match.params;
        console.log(tmdbid)
        this.props.getMovieOverview(tmdbid);
        // console.log(this.props.movie.movie);
    }

    render() {

        // console.log(this.props.movie.movie);


        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                {this.props.movie.movie.title ? <MovieTopSection history={this.props.history} movie={this.props.movie.movie}/> : ''}
                {this.props.movie.movie.cast ?
                    <CastCrewCarousel cast={this.props.movie.movie.cast.concat(this.props.movie.movie.crew)}/> : ''}
                <img src="http://localhost:3000/movie-overview-hard.jpg"/>
                <MovieReview reviews = {this.props.movie.movie.reviews}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {movie: state.movieOverview}
}

export default connect(mapStateToProps, {getMovieOverview})(MovieOverview);

