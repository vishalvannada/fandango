import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';

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
    changeImage
} from "../../actions/satishActions";

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.onSubmit_change_image = this.onSubmit_change_image.bind(this)

    }

    componentDidMount() {
        this.props.getUserDetails();
    }

    /* Passing Values from form-0: Change Image  */
    onSubmit_change_image(values) {
        this.props.changeImage(values)
    }


    /* Passing Values from form-1: Basic Information  */
    onSubmit_basic_info(values) {
        console.log(values);
        this.props.changeBasicInfo(values)

    }

    /* Passing Values from form-2: Email Change  */
    onSubmit_email(values) {
        console.log(values);
        this.props.changeEmail(values)

    }

    /* Passing Values from form-3: Password Change  */
    onSubmit_password(values) {
        console.log(values);
        this.props.changePassword(values)

    }

    /* Passing Values from form-3: Payment Infomation  */
    onSubmit_payment(values) {
        console.log(values);
        this.props.savePaymentMethod(values)

    }


    /* Form Validations and Error Messages */

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

    renderDescr(field) {
        const {meta: {touched, error}} = field;
        const cname = `form-bar ${touched && error ? 'has-danger' : ''} `;

        return (
            <div className={cname}>
                {/*<label>{field.label}</label>*/}
                <textarea {...field.input} {...field}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    customFileInput = (field) => {
        delete field.input.value; // <-- just delete the value property
        return <input type="file" id="file" {...field.input} />;
    };


    /* Render the page */

    render() {
        console.log("Inside Signup");
        console.log("props", this.props.user);
        const {handleSubmit, load, pristine, reset, submitting} = this.props;

        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <FandangoVIPHeader name='account'/>
                {/*Profile Component - Dropdown*/}
                <div className='row'>


                    <div id='profile_block' className="medium-9 columns">

                        {/*Change Profile Image*/}
                        <div className='collapse-element'>
                            <Collapsible className="panel accordion-head well" trigger="CHANGE IMAGE">


                                <div className="panel-group">


                                    <div className="panel accordion-body " id="change-image-form">
                                        <div className="row">
                                            <form className="image-form">
                                                <div className="medium-8 columns" id='image-information'>
                                                    <Field name="image"
                                                           className="form-control form-control-lg image-form-image"
                                                           id="FileBox"
                                                           type='file'
                                                           component={this.customFileInput}
                                                    />
                                                    <button id="save-basic file" onClick={() => {
                                                        this.onSubmit_change_image()
                                                    }} className="btn btn-default">Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

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


                        {/*Password Change*/}
                        <div className='collapse-element'><Collapsible className="panel accordion-head well"
                                                                       trigger="CHANGE PASSWORD">


                            <div className="panel-group">


                                <div className="panel accordion-body " id="password-info-form">
                                    <div className="row">
                                        <form onSubmit={handleSubmit(this.onSubmit_password.bind(this))}
                                              className="password-form">
                                            <span><p>Use 8 or more characters with a letter and a number or symbol. No more than 3 of the same character in a row. </p></span>
                                            <div className='row'>
                                                <div className="medium-12 columns">

                                                    <label>Old Password</label>
                                                    <Field name="oldpassword"
                                                           className="form-control form-control-lg password-form-oldpassword"
                                                           id="OldPasswordBox"
                                                           type='password'
                                                           component={this.renderField}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="medium-12 columns">

                                                    <label>New Password</label>
                                                    <Field name="newpassword"
                                                           className="form-control form-control-lg password-form-newpassword"
                                                           id="NewPasswordBox"
                                                           type='password'
                                                           component={this.renderField}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="medium-12 columns">
                                                    <label className="" htmlFor="">Confirm Password</label>
                                                    {/*<div className="special-note">This name will appear publicly when you rate and*/}
                                                    {/*review movies.*/}
                                                    {/*</div>*/}
                                                    <Field name="confirmpassword"
                                                           className="form-control form-control-lg update-form-confirmpassword"
                                                           id="ConfirmPasswordBox"
                                                           type='password'
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


                        {/*Add Payment*/}
                        <div className='collapse-element'><Collapsible className="panel accordion-head well"
                                                                       trigger="PAYMENT METHOD">


                            <div className="panel-group">


                                <div className="panel accordion-body " id="payment-info-form">
                                    <div className="row">
                                        <div className="large-12 columns">
                                            <div className="credit-card-logos">
                                                <span className="visa"></span>
                                                <span className="amex"></span>
                                                <span className="mastercard"></span>
                                                <span className="discover"></span>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit(this.onSubmit_payment.bind(this))}
                                              className="payment-form">
                                            {/*<span><p>Enter your. </p></span>*/}
                                            <div className='row'>
                                                <div className="medium-12 columns">

                                                    <label>Card Number</label>
                                                    <Field name="cardnumber"
                                                           className="form-control form-control-lg password-form-oldpassword"
                                                           id="CardNumberBox"
                                                           type='password'
                                                           component={this.renderField}
                                                    />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="medium-12 columns date-box">

                                                    <label>Expiration Data</label>
                                                    <div className='row'>
                                                        <Field name="month"
                                                               className="payment-form-month medium-6 columns"
                                                               id="NewMonthBox"
                                                               component='select'

                                                        >
                                                            <option defaultValue="">Month</option>
                                                            <option value="1">January</option>
                                                            <option value="2">February</option>
                                                            <option value="3">March</option>
                                                            <option value="4">April</option>
                                                            <option value="5">May</option>
                                                            <option value="6">June</option>
                                                            <option value="7">July</option>
                                                            <option value="8">August</option>
                                                            <option value="9">September</option>
                                                            <option value="10">October</option>
                                                            <option value="11">November</option>
                                                            <option value="12">December</option>


                                                        </Field>


                                                        <Field name="year"
                                                               className="payment-form-year medium-6 columns"
                                                               id="YearBox"
                                                               component='select'

                                                        >
                                                            <option value="">Year</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2019">2019</option>
                                                            <option value="2020">2020</option>
                                                            <option value="2021">2021</option>
                                                            <option value="2022">2022</option>
                                                            <option value="2023">2023</option>
                                                            <option value="2024">2024</option>
                                                            <option value="2025">2025</option>
                                                            <option value="2026">2026</option>
                                                            <option value="2027">2027</option>
                                                            <option value="2028">2028</option>


                                                        </Field>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="medium-6 columns">
                                                    <label className="" htmlFor="">Billing ZIP code</label>
                                                    {/*<div className="special-note">This name will appear publicly when you rate and*/}
                                                    {/*review movies.*/}
                                                    {/*</div>*/}
                                                    <Field name="zipcode"
                                                           className="form-control form-control-lg update-form-zipcode"
                                                           id="ZipCodeBox"
                                                           type='text'
                                                           component={this.renderField}
                                                    />
                                                </div>
                                                <div className="medium-6 columns right-40">
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
                {/*Footer*/}
                <Footer/>
                {/*Utility Footer*/}
                <UtilityFooter/>


            </div>
        )
    }


}


// export default connect(mapStateToProps, mapDispatchToProps)(signUp)
// function validate(values) {
//     const errors = {};

// let regEx_email = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i";
// //validate input from values
//
//
// if (!values.firstname || values.firstname.length < 5) {
//     errors.firstname = "Please enter username of min 5 characters\n ";
// }
//
//
// if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Please enter a valid Email-ID\n ";
// }
//
// if (!values.password || values.password.length<8){
//     errors.password = "Please enter a valid password\n";
// }
//
// if (!values.confirm_password) {
//     errors.confirm_password = 'Confirm Password is empty\n';
// }
// if (values.password !==values.confirm_password){
//     errors.confirm_password = 'Passwords doesn\'t match\n';
// }
//
// //if errors is empty , the form is fine to submit
// //if errors has *any* properties, redux form assumes that form is invalid
// return errors;
// }

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
            changeEmail, changePassword, changeBasicInfo,
            savePaymentMethod, changeImage,
            getUserDetails
        }, dispatch)
    }
}

function mapStateToProps(state) {
    return ({user: state.userProfile})
}

export default reduxForm({
    // validate,
    form: 'userForms'
})(connect(mapStateToProps, mapDispatchToProps)(UserProfile));
