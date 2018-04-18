/* Done by Rishith*/
import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form'
import './signup.css';
import logo from './fandango-logo.svg';
import offer from './offers.png'



class signUp extends Component {

    constructor(props) {
        super(props);


    }

    /* Passing Values into action */
    onSubmit(values){
        console.log(values);

    }

    /* Form Validations and Error Messages */

    renderField(field){
        const { meta:{touched,error}} = field;
        const cname = `form-bar ${touched && error? 'has-danger' : ''} `;

        return(
            <div className= {cname}>
                {/*<label>{field.label}</label>*/}
                <input {...field.input} {...field}
                />
                <div className="text-help">
                    {touched ? error: ''}
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




        /* Render using Redux-Form */
    render(){
        console.log("Inside Signup");
        return(

            <div>

                    <div>
                        <header id="registration-header" className="registration-header" role="banner">
                            <nav role="navigation" className="nav-bar">
                                <div className="row">
                                    <div className="large-11 large-centered columns">
                                        <ul className="inline-items">
                                            <li className="site-logo">
                                                <a className="fandango-logo" href="http://www.fandango.com/">
                                                    <img
                                                        src={logo}
                                                        alt="Fandango Logo" className="brand-img"/>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="registration-mode right">


                                            <span>Already have a Fandango VIP Account?</span> &nbsp;<a
                                            href="https://www.fandango.com/account/signin?from=%2f" className="cta">Sign
                                            In</a>

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        <div className="page registration">
                            <div className='row'>
                                <div className='double-type medium-7 medium-centered columns'>
                                    <div className='panel-group row'>
                                        <div id ='offer_container' className='panel intercept-container medium-2 columns'>
                                            <img
                                                src ={offer}
                                                id = 'offer'
                                            />
                                        </div>

                                        <div className='panel sign-up-form medium-6 columns'>
                                            <div className='sub-panel'><form className="registration-form">  {/*Handle Submit missing*/}
                                                <p className="join-header">JOIN FANDANGO<span
                                                    className="page-header-emphasis">VIP</span>

                                                    <span className="registration-caption hide-for-small-only">(And become eligible for VIP+ Points)</span>
                                                    <span className="registration-caption show-for-small-only">(And become eligible for VIP+ Points)</span>

                                                </p>
                                                <div className='form-group'>

                                                    {/* First Name */}
                                                    <label>First Name</label>
                                                    <Field name="firstname"
                                                           className="form-control form-control-lg registration-form-firstname"
                                                           id="FirstNameBox"
                                                           type = 'text'
                                                           component={this.renderField}
                                                    />

                                                    {/* Email - ID */}
                                                    <label>Email-ID</label>
                                                    <Field name="firstname"
                                                           className="form-control form-control-lg registration-form-email"
                                                           id="EmailAddressBox"
                                                           type = 'text'
                                                           component={this.renderField}
                                                    />

                                                    {/* Password */}
                                                    <label>Password</label>
                                                    <Field name="password"
                                                           className="form-control form-control-lg registration-form-password"
                                                           id="PasswordBox"
                                                           type = 'password'
                                                           component={this.renderField}
                                                    />
                                                    <small className="password-instruction">Use 8 or more characters
                                                        with a letter and a number or symbol. No more than 3 of the same
                                                        character in a row.
                                                    </small>
                                                    {/* Confirm Password */}
                                                    <Field name="confirm_password"
                                                           className="form-control form-control-lg registration-form-confirm-password"
                                                           id="ConfirmPasswordBox"
                                                           type = 'password'
                                                            component={this.renderField}
                                                    />
                                                    <div className="form-group">
                                                        <button id="registration-form-submit" className="btn-cta full-width vip-join-now" >
                                                            <span className="post-project-btn-font">Post My Project</span>
                                                        </button>
                                                    </div>
                                                    <small>
                                                        By creating an account, you agree to the <a
                                                        className="footer_links_bottom" rel="nofollow"
                                                        href="http://www.fandango.com/PrivacyPolicy"
                                                        name="&amp;lid=Footer&amp;lpos=Footer">Privacy Policy</a> and
                                                        the <a className="footer_links_bottom" rel="nofollow"
                                                               href="http://www.fandango.com/terms-and-policies"
                                                               name="&amp;lid=Footer&amp;lpos=Footer">Terms and
                                                        Policies</a>, and to receive email from Fandango.
                                                    </small>
                                                    <div className="divider">
                                                        <hr/>
                                                    </div>







                                                </div>
                                            </form></div>
                                        </div>



                                    </div>

                                </div>







                            </div>




                        </div>






                    </div>


            </div>




       );

    };



}

// function mapStateToProps(store) {
//     return ({});
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         ...bindActionCreators({}, dispatch)
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(signUp)
function validate(values) {
    const errors = {};
    //validate input from values


    if (!values.proName || values.proName.length < 10) {
        errors.proName = "Please enter atleast 10 characters\n ";
    }


    if (!values.proDescr || values.proDescr.length < 30 || values.proDescr.length > 140) {
        errors.proDescr = "Please enter between 30  and 150 characters\n ";
    }

    if (!values.proSkills) {
        errors.proSkills = 'please enter some skills';
    }

    //if errors is empty , the form is fine to submit
    //if errors has *any* properties, redux form assumes that form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostProjectForm'
}) (connect(null,{})(signUp));
