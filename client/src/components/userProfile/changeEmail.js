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

class ChangeEmail extends Component {

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


    /* Passing Values from form-2: Email Change  */
    onSubmit_email(values) {
        console.log(values);
        this.props.changeEmail(values)

    }



    render() {

        const {handleSubmit, load, pristine, reset, submitting} = this.props;

        return (


            <div className='row'>


                <div id='profile_block' className="medium-9 columns">

                    {/*E-Mail Change*/}
                    <div className='collapse-element'><Collapsible className="panel accordion-head well"
                                                                   trigger="CHANGE EMAIL">


                        <div className="panel-group">


                            <div className="panel accordion-body " id="email-info-form">
                                <div className="row">
                                    <form onSubmit={handleSubmit(this.onSubmit_email.bind(this))}
                                          className="email-form">
                                        <div className='row'>
                                            <div className="medium-12 columns">

                                                <label>Current Email</label>
                                                <div className='email-form-oldemail'><p>{this.props.user.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="medium-12 columns">

                                                <label>New Email</label>
                                                <Field name="newemail"
                                                       className="form-control form-control-lg update-form-newemail"
                                                       id="NewEmailBox"
                                                       type='email'
                                                       component={this.renderField}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className="medium-12 columns">
                                                <label className="" htmlFor="">Confirm Email</label>
                                                {/*<div className="special-note">This name will appear publicly when you rate and*/}
                                                {/*review movies.*/}
                                                {/*</div>*/}
                                                <Field name="confirmemail"
                                                       className="form-control form-control-lg update-form-confirmemail"
                                                       id="ConfirmEmailBox"
                                                       type='email'
                                                       component={this.renderField}
                                                />
                                            </div>


                                            <div className="medium-7 columns right-40">
                                                <button id="save-basic" className="btn save-button">Save</button>
                                            </div>
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
    connect(null, {changeBasicInfo})(ChangeEmail)
);