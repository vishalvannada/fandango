import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DropDownMenu} from 'material-ui'
import UnderBrand from '../home/underBrand';
import Collapsible from 'react-collapsible';
import './userProfile.css';
import Footer from './footer'
import UtilityFooter from './utilityFooter';
import BrandBar from '../home/brandBar';
import MegaDropDownHeader from '../home/megaDropDownHeader';
import FandangoVIPHeader from './fandangoVIPHeader'
import {
    changePassword,
    changeEmail,
    changeBasicInfo,
    getUserDetails,
    savePaymentMethod,
    changeImage,
    uploadImage
} from "../../actions/satishActions";

class BasicInfo extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;
        const cname = `form-bar ${touched && error ? 'has-danger' : ''} `;

        return (
            <div className={cname}>
                {/*<label>{field.label}</label>*/}
                <input {...field.input} {...field}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )

    }

    /* Passing Values from form-1: Basic Information  */
    onSubmit_basic_info(values) {
        console.log(values);
        this.props.changeBasicInfo(values)

    }


    render() {

        const {handleSubmit, load, pristine, reset, submitting} = this.props;

        let src = 'https://images.fandango.com/r1.0.431/redesign/areas/profile/img/no-image-account-profile.png';
        if (this.props.image) {
            src = 'http://localhost:3001/images/' + this.props.profile.userDetails.image;
        }

        return (


            <div className='row'>


                <div id='profile_block' className="medium-9 columns">

                    {/*Basic Information*/}
                    <div className='collapse-element'><Collapsible className="panel accordion-head well"
                                                                   trigger="BASIC INFORMATION">


                        <div className="panel-group">


                            <div className="panel accordion-body " id="basic-info-form">
                                <div className="row">
                                    <form onSubmit={handleSubmit(this.onSubmit_basic_info.bind(this))}
                                          className="update-form">
                                        <div className="medium-5 columns" id='basic-information'>

                                            <label>First Name</label>
                                            <Field name="firstname"
                                                   className="form-control form-control-lg update-form-firstname"
                                                   id="FirstNameBox"
                                                   type='text'
                                                   component={this.renderField}
                                                   value={this.props.user.firstname}
                                            />
                                        </div>
                                        <div className="medium-5 columns">

                                            <label>Last Name</label>
                                            <Field name="lastname"
                                                   className="form-control form-control-lg update-form-lastname"
                                                   id="LastNameBox"
                                                   type='text'
                                                   component={this.renderField}
                                                   value={this.props.user.lastname}
                                            />
                                        </div>
                                        <div className="medium-5 columns">
                                            <label className="display-name" htmlFor="">Display Name</label>
                                            <div className="special-note">This name will appear publicly when you
                                                rate and
                                                review movies.
                                            </div>
                                            <Field name="displayname"
                                                   className="form-control form-control-lg update-form-displayname"
                                                   id="DisplayName"
                                                   type='text'
                                                   component={this.renderField}
                                                   value={this.props.user.displayname}
                                            />
                                        </div>
                                        <div className="medium-5 columns">

                                            <label>Phone Number</label>

                                            <Field name="mobile"
                                                   className="form-control form-control-lg update-form-mobile"
                                                   id="MobileBox"
                                                   type='text'
                                                   component={this.renderField}
                                                   value={this.props.user.mobile}
                                            />
                                        </div>

                                        <div className="medium-11 columns">

                                            <label>Address</label>
                                            <Field name="address"
                                                   className="form-control form-control-lg update-form-address"
                                                   id="AddressBox"
                                                   type='textarea'
                                                   component={this.renderField}
                                                   value={this.props.user.address}
                                            />
                                        </div>
                                        <div className="medium-7 columns right-40">
                                            <button id="save-basic" className="btn save-button">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Collapsible></div>
                </div>

            </div>

        )
    }


}


export default reduxForm({
    form: 'image'
})(
    connect(null, {changeBasicInfo})(BasicInfo)
);