import React, {Component} from 'react';
import {connect} from "react-redux";
import swal from 'sweetalert'
//import "./movieTime.css"
import {Field, reduxForm,initialize} from "redux-form";
import {getMoviesInSearchPage,GetMoviesHallListing,addMovie} from "../../actions/pranithActions";
import moment from 'moment';

import DropdownList from 'react-widgets/lib/DropdownList'

import Multiselect from 'react-widgets/lib/Multiselect'
import 'react-widgets/dist/css/react-widgets.css';

class EditMovieHallBody extends Component {


    componentWillMount()
    {
        var idgrp = (this.props.location.pathname).split('/');
        var id = idgrp[2];
        //var projName = idgrp[3];
        var idg = {
            id: id
        };
        if (id != null) {
            console.log(id);
            console.log("calling movie hall editing");

            this.props.GetMoviesHallListing(idg);
        }




    }
    state = {
        movieListed: false,
    }
    insertValues() {


        console.log(this.props.editmovies);
        var ks=(this.props.editmovies.movies.moviemap[0].Showtimes);
        console.log(ks);
        var times=[];
        for(let t=0;t<ks.length;t++)
        {
            let k= Object.keys(ks[t]);
            //console.log(k);
            times.push(k);
        }
        console.log(times);
        const data = {
            "movie":this.props.editmovies.movies.moviemap[0].movie.MovieName,
            "theatre": this.props.editmovies.movies.moviemap[0].HallID.split('|')[0],
            "showTimes": times,
            "noOfSeats":this.props.editmovies.movies.moviemap[0].NoofSeats
            /*
            "aboutMe": this.props.profile.aboutMe,
            "skills": this.props.profile.skills*/
        };

        this.props.initialize(data);
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

        //for ( i=0;i<10;i++)
        {
           // d.setDate(d.getDate() + 1);
            //values.Date=i;
            console.log(values);
            //this.props.saveMovieListing(values);
        }


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
        console.log(this.props);
        console.log(this.props.editmovies);

        if(this.props.addMovies.addMovies==true)
        {
            swal("Movie Added");

        }
        else if(this.props.addMovies.addMovies=="movies not added"){

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


 if(this.props.editmovies.movies.code!==400) {
     this.insertValues();
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
                                                 name="theatre"
                                                 component={this.renderField}

                                                 valuesProps={this.props.editmovies.movies.moviemap[0]}
                                                 placeholder="Select a Movie Hall "/>
                                         </div>
                                         <br/>


                                         <div className="form-group form-group-custom">
                                             <Field
                                                 name="movie"
                                                 component={this.renderField}
                                                 textField="movie"
                                                 placeholder="Select a Movie name"/>
                                         </div>

                                         <br/>

                                         <Field
                                             name="showTimes"
                                             component={this.renderMultiselect}
                                            /* data={["9:30a", "12:30p", "3:30p", "9:30p"]}*/
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
                                         type="submit">Edit Movie Listing
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
 }else {
     return(
         <div> Fetching Movie to Edit</div>
     )
 }
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
    console.log(values.showTimes)


    return errors;
}

function mapStateToProps(state) {
    return {
        movietime: state.moviesSearchPagePK,
        moviesDropdown:state.moviesDropdown,
        addMovies:state.addMovies,
        editmovies:state.editMoviehall}
}


export default
reduxForm({
    validate,
    form: 'AddMovie'
})(connect(mapStateToProps, {getMoviesInSearchPage,GetMoviesHallListing,addMovie})(EditMovieHallBody));
