import React, {Component} from 'react';
import {connect} from "react-redux";
import swal from 'sweetalert'
//import "./movieTime.css"
import {Field, reduxForm,initialize} from "redux-form";
import {getMoviesInSearchPage,GetMoviesnHalls,addMovie} from "../../actions/pranithActions";

import DropdownList from 'react-widgets/lib/DropdownList'

import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';


class MovieTopSection extends Component {


    componentWillMount()
    {
        console.log("calling movie halls");
        this.props.GetMoviesnHalls();

    }
    state = {
        movieSearch: ""
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




    renderDropdown = ({input, data, valueField, textField, meta,placeholder}) => {

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
           console.log("on submit");
         //  var d = new Date();
        for (var i=0;i<11;i++) {
           // d.setDate(d.getDate() + 1);
            values.Date=i;
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
        console.log(this.props.addMovies);
        if(this.props.addMovies.addMovies==true)
        {
            swal("Movie Added");

        }
        const colors = [ { color: 'Red', value: 'ff0000' },
            { color: 'Green', value: '00ff00' },
            { color: 'Blue', value: '0000ff' } ]
        // console.log(this.props);
        //console.log(this.props.movietime.moviesTheatres.moviemap);
      //  console.log(this.props.movietime.moviesTheatres.moviemap[0].type);
        const {handleSubmit, load, pristine, reset, submitting} = this.props;
        var divStyle = {
            //backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
            backgroundColor: "white"
        };
        console.log(this.props.moviesDropdown.movies.moviemap);



            return (
                <div className="background-movie-top" style={divStyle}>
                    <div className="fandango-container">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div>
                                <div className="card profile-body-left">
                                    <div className="row inside">



                                        <div className="col-md-7">
                                            <div className="mt-4 ml-0 pl-0">


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
                                                <div className="form-group form-group-custom">
                                                    <Field
                                                        name="theatre"
                                                        component={this.renderDropdown}
                                                        data={this.props.moviesDropdown.movies.movietheatre}
                                                        valueField="type"
                                                        type="DropdownList"
                                                        textField="type"
                                                        placeholder="Select a Movie Hall "/>
                                                </div>
                                                <Field
                                                    name="showTimes"
                                                    component={this.renderMultiselect}
                                                    data={["9:30a","12:30p","3:30p","9:30p"]}
                                                    placeholder="Select Show time"
                                                />
                                                <br/>
                                                <Field
                                                    label="Please enter number of seats "
                                                    name="noOfSeats"
                                                    component={this.renderField}
                                                    type="text"
                                                />
                                                <br/>

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
        moviesDropdown:state.moviesDropdown,
        addMovies:state.addMovies}
}


export default
reduxForm({
    validate,
    form: 'AddMovie'
})(connect(mapStateToProps, {getMoviesInSearchPage,GetMoviesnHalls,addMovie})(MovieTopSection));
