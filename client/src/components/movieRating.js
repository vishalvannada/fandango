import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import BrandBar from './home/brandBar'
import MegaDropDownHeader from './home/megaDropDownHeader';
import {getMovieOverview, saveReview} from "../actions/vishalActions";
import swal from 'sweetalert'


class MovieRating extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
        };
    }

    componentWillMount() {
        const {tmdbid} = this.props.match.params;
        console.log(tmdbid)
        this.props.getMovieOverview(tmdbid);
    }

    onSubmit(data) {
        if (this.state.stars == '') {
            swal("Please Select Rating");
        }

        data.stars = this.state.stars;
        console.log(data)
        this.props.saveReview(data)
    }


    renderField(field) {
        const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`
        return (
            <div className="form-group form-group-custom">
                <input
                    className={className}
                    {...field.input}
                    placeholder={field.label}
                    type={field.type}
                />
                <div className="error-message">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }


    renderText(field) {
        const className = `form-control ${field.meta.touched && field.meta.error ? 'border-red' : ''}`
        return (
            <div className="form-group form-group-custom">
                <textarea
                    className={className}
                    {...field.input}
                    placeholder={field.label}
                    type={field.type}
                    rows="8"
                />
                <div className="note-submit-review">Note: Your review will appear publicly
                    on our site.
                    Please do not include any personal information (full street address,
                    etc.)
                    Allow up to 24 hours for your review to post.
                </div>
                <div className="error-message">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    render() {

        var divStyle = {
            backgroundImage: `url(http://image.tmdb.org/t/p/original${this.props.movie.movie.poster_path})`,
        }

        const {handleSubmit} = this.props;

        const ratingChanged = (newRating) => {
            console.log(newRating);
            this.setState({
                stars : newRating
            })
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

                            <nav className="nav-movie-top">
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
                                        {/*<Rating/>*/}
                                        <div className="rating-stars mt-2">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                half={false}
                                                edit={false}
                                                color2={'#ffd700'}
                                                value={this.props.movie.movie.vote_average / 2}
                                            />
                                        </div>
                                        <span
                                            className="icon icon-rottom-fresh rotten-tomatoes__icon text-center"></span><br/>
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

                                <div className="col-md-7 p-0" onSubmit={this.handleSubmit}>

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
                                                    color2={'#ffd700'}
                                                    onChange={ratingChanged}
                                                    value={this.state.stars}
                                                />
                                            </div>
                                        </div>

                                        <hr/>

                                        <h2 className="font-condensed-bold pt-2 px-3">WRITE A REVIEW</h2>

                                        <form className="pt-3 px-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>

                                            <small>Title:</small>
                                            <Field
                                                name="projectName"
                                                component={this.renderField}
                                                type="text"
                                            />


                                            <small>Body:</small>
                                            <Field
                                                name="projDesc"
                                                component={this.renderText}/>


                                            <button className="btn btn-primary align-right" type="submit">
                                                Save Review
                                            </button>

                                            <br/>
                                            <br/>
                                            <br/>

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

function validate(values) {

    const errors = {};

    if (!values.projectName) {
        errors.projectName = "Please enter a Title";
    }

    if (values.projDesc) {
        if (values.projDesc.length < 10) {
            errors.projDesc = "Body should contain more than 10 letters";
        }
    }

    return errors;
}


function mapStateToProps(state) {
    return {movie: state.movieOverview}
}

export default reduxForm({
    validate,
    form: 'reviewForm',
})(
    connect(mapStateToProps, {getMovieOverview, saveReview})(MovieRating)
);