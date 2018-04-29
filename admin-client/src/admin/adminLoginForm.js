import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field, reduxForm} from "redux-form";
// import "../Signin/signin.css";
import {bindActionCreators} from "redux";
 import {adminSignin} from "../actions/satishActions";
import * as API from '../api/API';
import "./signin.css";

class AdminLoginForm extends Component {
    renderField(field) {
        const {input, meta: {touched, error}} = field;
        const cname = `form-group ${touched && error ? 'has-danger' : ''} `;

        return (
            <div className={cname}>
                {/*<label>{field.label}</label>*/}
                <input className="form-control large-input"
                       {...input} {...field}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    renderError() {
        if (this.props.error) {
            return (
                <div className="text-help">
                    {this.props.error}
                </div>
            );
        }
    }

    onSubmit(values) {
        console.log(values);
        //this.props.adminSignin(values);
        API.adminSignin(values)
        .then((res)=>{
            console.log("admin sifnin----->"+JSON.stringify(res));
            this.props.history.push('/dashboard');
            if(res.status===201){

            }

        });
    }

    render() {

        console.log(this.props.error)

        const {handleSubmit, load, pristine, reset, submitting} = this.props;
        return (
            <div className="panel sign-up-form large-6 medium-6 small-12 columns">
                <div className="sub-panel">
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <h2 className="join-header font-condensed-bold">FANDANGO<span className="page-header-emphasis">ADMIN</span>
                            <span className="registration-caption hide-for-small-only"></span>
                            <span className="registration-caption show-for-small-only"></span>
                        </h2>
                        <div className="registration-promo-unit show-for-small-only">
                            <img
                                src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png"
                                alt=""/>
                        </div>
                        <div id="ErrorMessageWrapper" className=" hide">
                            <div id="signin-error" className="error-msg" component={this.renderError}></div>
                        </div>
                        <label htmlFor="UsernameBox" className="font-family-roboto font-color-white">Email Address</label>
                        <Field name="email" type="text" id="UsernameBox" component={this.renderField}/>
                        <label htmlFor="PasswordBox" className="font-family-roboto font-color-white">Password</label>
                        <Field name="password" type="password" maxLength="40" id="PasswordBox"
                               component={this.renderField}/>

                        <input type="hidden" name="ctl00$GlobalBody$SignOnControl$CaptchEnabledField"
                               id="GlobalBody_SignOnControl_CaptchEnabledField"/>

                        <button type="submit" disabled={pristine || submitting} className="btn btn-primary mt-2"
                                alternatetext="Sign In">Sign In
                        </button>
                    </form>
                </div>


            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    //validate input from values

    if (!values.email) {
        errors.email = 'Please enter Username or email address\n';
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!values.password) {
        errors.password = 'Please enter password';
    }

    //if errors is empty , the form is fine to submit
    //if errors has *any* properties, redux form assumes that form is invalid
    return errors;
}


function mapStateToProps(state) {
    return ({error: state.user.message})
}


function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({
             adminSignin
        }, dispatch)

    };
}

export default reduxForm({
    validate,
    form: 'loginForm'
})(connect(mapStateToProps, mapDispatchToProps)(AdminLoginForm));
