import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import {getMovieOverview} from "../actions/vishalActions";


class MovieRating extends Component {

    componentWillMount() {
        const {tmdbid} = this.props.match.params;
        console.log(tmdbid)
        this.props.getMovieOverview(tmdbid);
        // console.log(this.props.movie.movie);
    }

    render() {

        var divStyle = {
            backgroundImage: `url(http://image.tmdb.org/t/p/original${this.props.movie.movie.poster_path})`,
        }

        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <div style={divStyle}>
                    <div className=" background-movie-top">
                        <div className="fandango-container">
                            <br/>
                            <h1 className="font-condensed-bold-white">{this.props.movie.movie.title}</h1>

                            <nav class="nav-movie-top">
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
                                            src={`http://image.tmdb.org/t/p/w200${this.props.movie.movie.poster_path}`}
                                            className="image-movie-detail image"/>
                                    </div>
                                    <div className="movieDetail-release-date text-center">
                                        <br/>
                                        <span
                                            className="font-size-13 font-timesNewRoman color-ccc">{this.props.movie.movie.status}</span>
                                        <h5 className="font-condensed-bold-white">{moment(this.props.movie.movie.release_date).format('MMM DD, YYYY')}</h5>
                                        <small
                                            className="font-size-13 font-timesNewRoman color-ccc">{this.props.movie.movie.rating} {this.props.movie.movie.runtime} minutes
                                        </small>
                                        <br/>
                                        <small className="font-size-13 font-timesNewRoman color-ccc">Suspense/Thriller
                                        </small>
                                        <span></span>
                                        {/*<Rating/>*/}
                                        <div className="rating-stars mt-2">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                half={false}
                                                color2={'#ffd700'}/>
                                        </div>
                                        <span
                                            class="icon icon-rottom-fresh rotten-tomatoes__icon text-center"></span><br/>
                                        <small className="font-size-13 font-timesNewRoman color-ccc ">Rotten Tomatoes
                                        </small>
                                        <br/>
                                    </div>


                                    <div className="movie-showtimes p-3">
                                        <p className="font-timesNewRoman font-color-white font-size-18">First Time
                                            Writing A Review?</p>
                                        <h6 className="font-color-white font-size-14">HERE ARE A FEW TIPS TO GET YOU
                                            STARTED:</h6>
                                        <ul className="mb-0 font-color-white font-size-13 p-3">
                                            <li>Did you like the film? Why or why not?</li>
                                            <li>What'd you think of the acting, directing, cinematography, writing,
                                                etc.?
                                            </li>
                                            <li>Is this movie for kids? Adults? Any age?</li>
                                            <li>No spoiler alerts! Please keep the ending to yourself.</li>
                                            <li>Be sure to check your spelling and grammar.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-7 p-0">

                                    <div className="form-review">


                                        <div className="row">

                                            <div className="col-md-10">
                                                <h2 className="font-condensed-bold pt-2 px-3">PLEASE RATE THIS MOVIE
                                                    FROM 1-5
                                                    STARS</h2>
                                            </div>
                                            <div className="col-md-2 pt-2 px-2">
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    half={false}
                                                    color2={'#ffd700'}/>
                                            </div>
                                        </div>

                                        <hr/>

                                        <h2 className="font-condensed-bold pt-2 px-3">WRITE A REVIEW</h2>

                                        <form className="pt-3 px-4">

                                            <small>Title:</small>
                                            <input type="email" class="form-control" id="exampleFormControlInput1"/>


                                            <small>Body:</small>
                                            <textarea class="form-control" id="exampleFormControlTextarea1"
                                                      rows="8"></textarea>


                                            <div className="note-submit-review">Note: Your review will appear publicly
                                                on our site.
                                                Please do not include any personal information (full street address,
                                                etc.)
                                                Allow up to 24 hours for your review to post.
                                            </div>


                                            <button className="btn btn-primary text-center">
                                                Save Review
                                            </button>

                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {movie: state.movieOverview}
}

export default connect(mapStateToProps, {getMovieOverview})(MovieRating);

