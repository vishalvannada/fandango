import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';


class MovieTopSection extends Component {

    render() {

        var divStyle = {
            backgroundImage: `url(http://image.tmdb.org/t/p/original${this.props.movie.poster_path})`,
        }

        console.log()
        const url = `https://www.youtube.com/embed/${this.props.movie.youtube_trailer}`;

        return (
            <div>
                <div style={divStyle}>
                    <div className=" background-movie-top">
                        <div className="fandango-container">
                            <br/>
                            <h1 className="font-condensed-bold-white">{this.props.movie.title}</h1>


                            <nav class="nav-movie-top my-3">
                                <a href="#">overview</a>
                                <a href="#">movietimes+tickets</a>
                                <a href="#">synopsis</a>
                                <a href="#">movie reviews</a>
                                <a href="#">trailers</a>
                                <a href="#">more</a>
                            </nav>

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="movieDetail-image-div">
                                        <img
                                            src={`http://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`}
                                            className="image-movie-detail image"/>
                                    </div>
                                    <div className="movieDetail-release-date text-center">
                                        <br/>
                                        <span
                                            className="font-size-13 font-timesNewRoman color-ccc">{this.props.movie.status}</span>
                                        <h5 className="font-condensed-bold-white">{moment(this.props.movie.release_date).format('MMM DD, YYYY')}</h5>
                                        <small
                                            className="font-size-13 font-timesNewRoman color-ccc">{this.props.movie.rating} {this.props.movie.runtime} minutes
                                        </small>
                                        <br/>
                                        <small
                                            className="font-size-13 font-timesNewRoman color-ccc">{this.props.movie.genre}
                                        </small>
                                        <span></span>
                                        {/*<Rating/>*/}

                                        <div
                                            onClick={() => this.props.history.push(`/movie-review/${this.props.movie.tmdbid}`)}
                                            className="rating-stars mt-2">
                                            <ReactStars
                                                edit={false}
                                                count={5}
                                                size={24}
                                                half={false}
                                                value={this.props.movie.vote_average/2}
                                                color2={'#ffd700'}/>
                                        </div>

                                        <span
                                            class="icon icon-rottom-fresh rotten-tomatoes__icon text-center"></span><br/>
                                        <small className="font-size-13 font-timesNewRoman color-ccc ">Rotten Tomatoes
                                        </small>
                                        <br/>
                                    </div>


                                    <div className="movie-showtimes">
                                        <div className="movie-showtimes-icon"></div>
                                        <h3 className="font-condensed-bold-white">BUY MOVIE TICKETS</h3>

                                        <br/>
                                        <Link to="/somewhere"><span className="font-weight-700 font-size-14">SOME ALL MOVIE THEATRES + MOVIES</span></Link><br/>
                                        {/*<small className="font-color-white">Movie Times for Tuesday, April 17, 2018*/}
                                        {/*<br/>*/}
                                        {/*Closed caption  Luxury Lounger Recliners Reserved seating</small>*/}
                                    </div>


                                </div>

                                <div className="col-md-7 p-0">
                                    <div className="video-detail">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src={url}></iframe>
                                        </div>

                                        <div className="details">
                                            <h4 className="font-condensed-bold-white pt-2">{this.props.movie.title} :
                                                TRAILER</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="movieDetail-synopsis-big">
                    <div className="movieDetail-synopsis">
                        <br/>
                        <p>{this.props.movie.title} Synopsis</p>

                        <p className="font-timesNewRoman font-size-18">
                            {this.props.movie.overview}
                        </p>
                        <br/>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(MovieTopSection);
