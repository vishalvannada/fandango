import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from "react-slick";
import _ from 'lodash';
import {demo} from "../../actions/homeActions";

class Carousel extends Component {


    renderMovies() {
        if (this.props.home.movies.length > 0) {
            return (_.map(this.props.home.movies, movie => {
                return (
                    <div key={movie.title}>
                        <div className="carousel-movie-image">
                            <img
                                src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                className="image-carousel image"/>
                        </div>
                        <div className="carousel-movie-name px-2 pt-1">
                            <span className="font-condensed-bold p-0">{movie.title}</span>
                            <br/>
                            <span className="font-timesNewRoman-gray">{movie.release_date}</span>
                        </div>
                    </div>
                )
            }))
        }
    }


    render() {
        var settings = {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
        };

        return (
            <div className="carousel">
                <Slider {...settings}>
                    {this.renderMovies()}
                </Slider>

            </div>
        )
    }
}


export default connect(null, null)(Carousel);


