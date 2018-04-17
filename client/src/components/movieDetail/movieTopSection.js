import React, {Component} from 'react';
import {connect} from "react-redux";
import Rating from './rating'

class MovieTopSection extends Component {

    render() {

        var divStyle = {
            backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
        }

        const url = `https://www.youtube.com/embed/BdJKm16Co6M`;

        return (
            <div style={divStyle}>
                <div className=" background-movie-top">
                    <div className="fandango-container">
                        <br/>
                        <h1 className="font-condensed-bold-white">BLUMHOUSE'S TRUTH OR DARE (2018)</h1>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="movieDetail-image-div">
                                    <img
                                        src={`http://image.tmdb.org/t/p/w200/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg`}
                                        className="image-movie-detail image"/>
                                </div>
                                <div className="movieDetail-release-date text-center">
                                    <br/>
                                    <span className="font-size-13 font-timesNewRoman color-ccc">Released</span>
                                    <h5 className="font-condensed-bold-white">APRIL 13, 2018</h5>
                                    <small className="font-size-13 font-timesNewRoman color-ccc">PG-13, 1 hr 40 min
                                    </small>
                                    <br/>
                                    <small className="font-size-13 font-timesNewRoman color-ccc">Suspense/Thriller
                                    </small>
                                    <span></span>
                                    <Rating/>
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
                                        <h4 className="font-condensed-bold-white pt-2">TITLE OF THE MOVIE : TRAILER</h4>
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


export default connect(null, null)(MovieTopSection);
