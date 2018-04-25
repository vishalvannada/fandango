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
    changeImage
} from "../../actions/satishActions";

import Image from './image';
import BasicInfo from './basicInfo';
import ChangeEmail from './changeEmail';
import ChangePassword from './changePassword';
import PaymentMethod from './paymentMethod';

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

    render() {
        console.log("Inside Signup");
        console.log("props", this.props.user);
        const {handleSubmit, load, pristine, reset, submitting} = this.props;

        if (this.props.user.user) {
            if (!this.props.user.user.email) {
                console.log(this.props)
                return (<div></div>)
            }
        }

        return (
            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <FandangoVIPHeader name='account'/>
                {/*Profile Component - Dropdown*/}
                <div className='row'>


                    <div id='profile_block' className="columns">

                        {this.props.user.user.email ? <Image image={this.props.user.user.image}/> : ''}
                        {this.props.user.user.email ? < BasicInfo user={this.props.user.user}/> : ''}
                        {this.props.user.user.email ? <ChangeEmail user={this.props.user.user}/> : ''}
                        {this.props.user.user.email ? <ChangePassword user={this.props.user.user}/> : ''}
                        {this.props.user.user.email ? <PaymentMethod user={this.props.user.user}/> : ''}


                    </div>


                </div>
                {/*/!*Footer*!/*/}
                {/*<Footer/>*/}
                {/*/!*Utility Footer*!/*/}
                {/*<UtilityFooter/>*/}


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
