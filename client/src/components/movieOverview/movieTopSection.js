import React, {Component} from 'react';
import {connect} from "react-redux";
import Rating from './rating'
import moment from "moment";

class MovieTopSection extends Component {

    render() {

        var divStyle = {
            backgroundImage: `url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)`,
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
                                        <small className="font-size-13 font-timesNewRoman color-ccc">Suspense/Thriller
                                        </small>
                                        <span></span>
                                        {/*<Rating/>*/}

                                    </div>


                                    <div className="movie-showtimes">

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

                <div className="movieDetail-release-date">
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
