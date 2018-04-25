import React, {Component} from 'react';
import {connect} from "react-redux";
import swal from 'sweetalert'
import moment from 'moment';
import {Link} from 'react-router-dom';
import "./movieTime.css"
import {Field, reduxForm, initialize} from "redux-form";
import {getMoviesInSearchPage, GetMoviesnHalls, addMovie} from "../../actions/pranithActions";

import DropdownList from 'react-widgets/lib/DropdownList'

import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';
import { formValueSelector } from 'redux-form';

//const selector = formValueSelector('EditMovie');

class EditMovieBody extends Component {


    componentWillMount() {
        console.log("calling movie halls");
        this.props.GetMoviesnHalls();

    }

    state = {
        movieSearch: "",
        moviesSelected:""
       // values: selector('theatre')
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
                    defaultValue={field.inpVal}
                />
                <div className="error-message">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }

    renderMultiselect = ({input, data, valueField, textField, meta}) => {

        const className = `${meta.touched && meta.error ? 'border-red' : ''}`
        return (
            <div>
                <Multiselect {...input}
                             className={className}
                             onBlur={() => input.onBlur()}
                             value={input.value || []} // requires value to be an array
                             data={data}
                             valueField={valueField}
                             textField={textField}
                             placeholder={"Select Movie times"}

                />
                <div className="error-message">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )
    }

    /*data={this.props.moviesDropdown.movies.movietheatre}
                                                        valueField="type"
                                                        type="DropdownList"
                                                        textField="type"
    * */


    renderDropdown = ({input, data, valueField, textField, meta, placeholder}) => {

        const className = `${meta.touched && meta.error ? 'border-red' : ''}`
        return (
            <div>
                <DropdownList {...input}
                              className={className}
                              onBlur={() => input.onBlur()}
                    //value={input.value || []} // requires value to be an array
                              data={data}
                              valueField={valueField}
                              textField={textField}
                              placeholder={placeholder}


                />
                <div className="error-message">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )
    }


    /*renderDropdown(field) {
       // const className = `form-control input-login ${field.meta.touched && field.meta.error ? 'border-red' : ''}`
        const className ="form-control input-login";
        return (
            <div className="form-group form-group-custom">
                <DropdownList
                    className={className}
                    {...field}



                />
                <div className="error-message">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }*/
    onSubmit(values) {
        // console.log("on submit");
        //  var d = new Date();
        //let i=0;
        //for ( i=0;i<10;i++)
        {
            // d.setDate(d.getDate() + 1);
            //values.Date=i;
            console.log(values);
            this.props.addMovie(values);
        }
        //console.log(values.username);
        //console.log(this.props);
        // this.setState({editProfile: false});
        //  this.props.editProfile(values);
        // this.props.history.push("/dashboard");

    };

    renderText(field) {

        const className = `form-control ${field.meta.touched && field.meta.error ? 'border-red' : ''}`
        return (
            <div className="form-group form-group-custom">
                <textarea
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

    render() {
        console.log(this.props)
        console.log(this.state);
        if (this.props.addMovies.addMovies == true) {
            swal("Movie Added");

        }
        else if (this.props.addMovies.addMovies == "movies not added") {

            swal("Movie not added");
        }
        // console.log(this.props);
        //console.log(this.props.movietime.moviesTheatres.moviemap);
        //  console.log(this.props.movietime.moviesTheatres.moviemap[0].type);
        const {handleSubmit, load, pristine, reset, submitting} = this.props;
        var divStyle = {
            //backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
            backgroundColor: "white"
        };
        //console.log(this.props.moviesDropdown.movies.moviemap);


        return (
            <div className="background-movie-top" style={divStyle}>
                <div className="fandango-container">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div>
                            <div className="card profile-body-left">
                                <div className="row inside">


                                    <div className="col-md-11 col-11">
                                        <div className="mt-4 ml-0 pl-0">
                                            <div className="form-group form-group-custom">
                                                <Field
                                                    name="theatre"
                                                    component={this.renderDropdown}
                                                    data={this.props.moviesDropdown.movies.movietheatre.filter(function (task) {
                                                        console.log(task.data[0].user)
                                                        return task.data[0].user == "pranithkouda@gmail.com";
                                                    })}
                                                    valueField="type"
                                                    type="DropdownList"
                                                    textField="type"
                                                    placeholder="Select a Movie Hall "
                                                    onChange={event => {
                                                        this.setState({"moviesSelected":event.type})
                                                        //console.log("This is the new value of field myField: " , event);
                                                        //props.input.onChange(event); // <-- Propagate the event
                                                    } }

                                                />
                                            </div>
                                            <br/>
                                            <div>
                                                {


                                                    this.props.moviesDropdown.movies.movietheatre.map((item) => {
                                                        if(this.state.moviesSelected!=""&& item.type==this.state.moviesSelected) {
                                                            return (
                                                                <div className="moviesTheatres col-12"
                                                                     id="moviesTheatres">
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
                                                                                    <div className="fd-movie__details">
                                                                                        <h3 className="fd-movie__title font-sans-serif font-lg font-300 p-2 uppercase">
                                                                                            <Link className="dark font-condensed-bold"
                                                                                                  to={`/movie-overview/${movie.movie.movieId}`}>Date : {moment(movie.Date).format("YYYY-MM-DD")}</Link>
                                                                                        </h3>
                                                                                    </div>
                                                                                    <ul className="fd-movie__showtimes">


                                                                                        <li className="fd-movie__showtimes-variant">

                                                                                            <ol className="fd-movie__btn-list">

                                                                                                <li className="fd-movie__btn-list-item">


                                                                                                    <Link
                                                                                                        className="btn showtime-btn" to={"/editmoviehalllisting/"+movie.ID}>Edit </Link>
                                                                                                    <br/>



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
                                                        }

                                                })}
                                            </div>
{/*
                                            <div className="form-group form-group-custom">
                                                <Field
                                                    name="movie"
                                                    component={this.renderDropdown}
                                                    data={this.props.moviesDropdown.movies.moviemap}
                                                    valueField="movie"
                                                    type="DropdownList"
                                                    textField="movie"
                                                    placeholder="Select a Movie name"/>
                                            </div>

                                            <br/>

                                            <Field
                                                name="showTimes"
                                                component={this.renderMultiselect}
                                                data={["9:30a", "12:30p", "3:30p", "9:30p"]}
                                                placeholder="Select Show time"
                                            />
                                            <br/>
                                            <Field
                                                label="Please enter number of seats "
                                                name="noOfSeats"
                                                component={this.renderField}
                                                type="text"
                                            />
                                            <br/>*/}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card profile-body-right">
                                <div className="card-header">
                                    <button className="edit-profile-button"
                                            type="submit">Add Movie
                                    </button>
                                    <br/>
                                    <br/>
                                    <hr/>

                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        )
    }


}

function validate(values) {

    //object that returns errors, if errors is empty the form will be submitted, else it wont be submitted
    //if errors has any properties, redux from assumes that form is invalid
    const errors = {};

    //names are associated to fields in the redux form names
    if (!values.noOfSeats) {
        errors.username = "No of Seats can't be empty";
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        movietime: state.moviesSearchPagePK,
        moviesDropdown: state.moviesDropdown,
        addMovies: state.addMovies
    }
}


export default reduxForm({
    validate,
    form: 'EditMovie'
})(connect(mapStateToProps, {getMoviesInSearchPage, GetMoviesnHalls, addMovie})(EditMovieBody));
