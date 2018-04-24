import React, {Component} from 'react';
import {connect} from "react-redux";
import "./movieTime.css"
import {getMoviesInSearchPage} from "../../actions/pranithActions";
import Slider from "react-slick";
import _ from 'lodash';
import moment from 'moment';
import {Link} from 'react-router-dom';

class MovieTopSection extends Component {
    state = {
        movieSearch: "",
        Date: moment(new Date()).format()
    }

    setDate(values) {
        //console.log(values);
        this.setState({Date: values})
        console.log("i consoled this", this.state);
        this.props.getMoviesInSearchPage(this.state);

    }

    searchMovie() {
        console.log(this.state);
        this.props.getMoviesInSearchPage(this.state);
    }


    renderDates() {

        var arrayDates = [];

        for (var i = 0; i < 15; i++) {
            let newDate = new Date();
            newDate.setDate(newDate.getDate() + i);
            arrayDates.push(newDate);
            //  console.log(newDate);
        }

        //  console.log(arrayDates)


        return (_.map(arrayDates, Date => {
            return (
                <div key={Date}>

                    <div className="background-white text-center carousel-date" onClick={() => {
                        this.setDate(moment(Date).format())
                    }}>

                        <span className="font-timesNewRoman font-size-15">{moment(Date).format('ddd')}</span>
                        <br/>
                        <h3 className="color-darkgray mt-2 font-condensed-bold">{moment(Date).format('MMM')}</h3>
                        <h2 className="color-darkgray pb-2 font-condensed-bold">{moment(Date).format('DD')}</h2>
                    </div>
                </div>
            )
        }))

    }

    render() {

        var settings = {
            slidesToShow: 7,
            slidesToScroll: 3,
            infinite: false,
        };

        if (this.props.movietime.moviesTheatres.moviemap.length == 0) {
            return (
                <div>No Movies Found</div>
            )
        }

        if (this.props.movietime.moviesTheatres.moviemap[0].type != "test") {
            return (
                <div>

                    <div className="width-100 headerResultsPincode">

                        <div className="fandango-container">

                            <h1 className="font-condensed-bold-white pt-3">
                                MOVIE TIMES + TICKETS
                                <span className="font-color-fandango"> NEAR 95126</span>
                            </h1>

                            <nav class="nav-movie-top pb-2">
                                <a href="#">All theaters</a>
                                <a href="#">Fandango Ticketing Theaters</a>
                                <a href="#">My theaters</a>
                            </nav>

                        </div>
                    </div>

                    <br/>

                    <div className="carousel-dates">
                        <Slider {...settings}>
                            {this.renderDates()}
                        </Slider>

                    </div>

                    <div className="fandango-container">
                        <br/>
                        <div className="date-picker__location">
                            <span className="date-picker__location-text">ENTER CITY, STATE OR ZIP CODE</span>
                            <input className="date-picker__location-input js-date-input"
                                   placeholder="City, State or Zip Code" type="text"
                                   onChange={(event) => {
                                       this.setState({
                                           movieSearch: event.target.value
                                       });
                                   }}/>
                            <button type="button" onClick={() => {
                                this.searchMovie()
                            }} className="btn date-picker__location-submit js-date-picker-btn">GO
                            </button>
                        </div>
                    </div>

                    <div className="fandango-container">
                        {this.props.movietime.moviesTheatres.moviemap.map((item) => {
                            return (
                                <div className="moviesTheatres col-10" id="moviesTheatres">
                                    <ul>
                                        <div className="fd-theater__header">
                                            <h4 className="font-condensed-bold-white">
                                                <a className="light">{item.type} Cinemas</a>
                                            </h4>


                                            <p className="color-ccc font-family-roboto">
                                                {item.data[0].theatreCity}, {item.data[0].theatreState}, {item.data[0].theatreZip}
                                                <a className="ml-3" href="">MAP</a> |
                                                <a href=""> AMENITIES</a>
                                            </p>
                                        </div>


                                        {item.data.map((movie) => {
                                            return (

                                                <div className="fd-movie">
                                                    <div className="fd-movie__poster">
                                                        <Link to={`/movie-overview/${movie.movie.movieId}`}>
                                                            <img
                                                                src={`http://image.tmdb.org/t/p/w200${movie.movie.poster_path}`}
                                                                className="image-theatres image"/>
                                                        </Link>


                                                    </div>
                                                    <div className="fd-movie__details">
                                                        <h3 className="fd-movie__title font-sans-serif font-lg font-300 p-2 uppercase">
                                                            <Link className="dark font-condensed-bold"
                                                                  to={`/movie-overview/${movie.movie.movieId}`}>{movie.movie.MovieName}</Link>
                                                        </h3>
                                                    </div>
                                                    <ul className="fd-movie__showtimes">


                                                        <li className="fd-movie__showtimes-variant">


                                                            <h3 className="fd-movie__showtimes__tick-headline pt-3 font-serif">
                                                                <span className="icon icon-ticket"></span>
                                                                Select a movie time to buy Standard Showtimes
                                                            </h3>


                                                            <ul className="fd-movie__amentiy-list">


                                                            </ul>
                                                            <ol className="fd-movie__btn-list">

                                                                <li className="fd-movie__btn-list-item">


                                                                    <span className="btn showtime-btn">4:00p</span>


                                                                </li>


                                                                <li className="fd-movie__btn-list-item">


                                                                    <span className="btn showtime-btn">6:15p</span>


                                                                </li>


                                                                <li className="fd-movie__btn-list-item">


                                                                    <span className="btn showtime-btn">8:30p</span>


                                                                </li>


                                                                <li className="fd-movie__btn-list-item">


                                                                    <span className="btn showtime-btn">10:45p</span>


                                                                </li>

                                                            </ol>
                                                        </li>


                                                    </ul>
                                                </div>

                                            )
                                        })}
                                    </ul>
                                    <br/>
                                </div>
                            )

                        })}
                    </div>

                </div>
            )
        }
        else {
            return (

                <div id="initialLoad">
                    <div className="searchboxResults">
                        <br/>
                        <div className="date-picker__location">
                            <div className="date-picker__error js-date-picker__error hide"></div>


                            <span className="date-picker__location-text">ENTER CITY, STATE OR ZIP CODE</span>
                            <input className="date-picker__location-input js-date-input"
                                   placeholder="City, State or Zip Code" type="text"
                                   onChange={(event) => {
                                       this.setState({
                                           movieSearch: event.target.value
                                       });
                                   }}/>
                            <button type="button" onClick={() => {
                                this.searchMovie()
                            }} className="btn date-picker__location-submit js-date-picker-btn">GO
                            </button>
                        </div>
                    </div>


                </div>)
        }
    }
}

function mapStateToProps(state) {
    return {movietime: state.moviesSearchPagePK}
}


export default connect(mapStateToProps, {getMoviesInSearchPage})(MovieTopSection);

