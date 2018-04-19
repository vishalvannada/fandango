import React, {Component} from 'react';
import {connect} from "react-redux";
//import "./movieTime.css"
import {Field, reduxForm,initialize} from "redux-form";
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {getMoviesInSearchPage} from "../../actions/pranithActions";
import StarRatings from 'react-star-ratings';

class MovieTopSection extends Component {
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
    onSubmit(values) {
        //   console.log("on submit");
        // console.log(values);
        //console.log(values.username);
        //console.log(this.props);
       // this.setState({editProfile: false});
        this.props.editProfile(values);
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
        // console.log(this.props);
        //console.log(this.props.movietime.moviesTheatres.moviemap);
      //  console.log(this.props.movietime.moviesTheatres.moviemap[0].type);
        const {handleSubmit, load, pristine, reset, submitting} = this.props;
        var divStyle = {
            //backgroundImage: 'url(http://image.tmdb.org/t/p/original/nIrDm42dy5PaXtUAzUfPmxM4mQm.jpg)',
            backgroundColor: "white"
        };
        console.log(this.props.movietime.moviesTheatres.moviemap.type);



            return (
                <div className="background-movie-top" style={divStyle}>
                    <div className="fandango-container">

 Pranith
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <div>
                                <div className="card profile-body-left">
                                    <div className="row inside">



                                        <div className="col-md-7">
                                            <div className="mt-4 ml-0 pl-0">

                                                <Field
                                                    label="This is your Name"
                                                    name="username"
                                                    component={this.renderField}
                                                    type="text"
                                                /><br/>

                                                <Field
                                                    label="Email Address"
                                                    name="email"
                                                    component={this.renderField}
                                                    type="email"
                                                />
                                                <br/>

                                                <Field
                                                    label="Phone Number"
                                                    name="phoneNumber"
                                                    component={this.renderField}
                                                    type="tel"
                                                /><br/>
                                                <Field
                                                    label="Bio"
                                                    name="aboutMe" component={this.renderText}/>


                                                <Field
                                                    label="Skills"
                                                    name="skills" component={this.renderText}/>
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
    if (!values.username) {
        errors.username = "UserName can't be empty";
    }

    if (values.username) {
        if (values.username.length < 6) {
            errors.username = "Username should be of 6 letters or more!";
        }
    }

    if (!values.email) {
        errors.email = "Email can't be empty";
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Please enter a valid email address";
    }
    if(isNaN(values.phoneNumber)){
        errors.phoneNumber = "Please Enter a valid phone number"
    }
    return errors;
}

function mapStateToProps(state) {
    return {movietime: state.moviesSearchPagePK}
}


export default
reduxForm({
    validate,
    form: 'AddMovie'
})(connect(mapStateToProps, {getMoviesInSearchPage})(MovieTopSection));
