import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SigninNavbar from './signinNavbar';
import "./signin.css";

class SigninForm extends Component {

    render() {
        return (
            <div class="panel sign-up-form large-6 medium-6 small-12 columns">
                <div class="sub-panel">
                    <p class="join-header">FANDANGO<span class="page-header-emphasis">VIP</span>
                        <span class="registration-caption hide-for-small-only"></span>
                        <span class="registration-caption show-for-small-only"></span>
                    </p>
                    <div class="registration-promo-unit show-for-small-only">
                        <img src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png" alt=""/>
                    </div>
                    <div id="ErrorMessageWrapper" class=" hide">
                        <div id="signin-error" class="error-msg"></div>
                    </div>
                    <label for="UsernameBox">Email Address</label>
                    <input name="ctl00$GlobalBody$SignOnControl$UsernameBox" type="text" id="UsernameBox"/>
                    <label for="PasswordBox">Password</label>
                    <input name="ctl00$GlobalBody$SignOnControl$PasswordBox" type="password" maxlength="40" id="PasswordBox"/>

                    <input type="hidden" name="ctl00$GlobalBody$SignOnControl$CaptchEnabledField" id="GlobalBody_SignOnControl_CaptchEnabledField"/>
                    <a id="ForgotPasswordLink" href="forgotpassword?from=%2F" class="secondary-cta">Forgot your password?</a>
                    <a id="ctl00_GlobalBody_SignOnControl_SignInButton" class="btn-cta full-width" alternatetext="Sign In" data-wss="&amp;lid=Sign_Button" href="javascript:__doPostBack('ctl00$GlobalBody$SignOnControl$SignInButton','')">Sign In</a>

                </div>
                <div class="divider">
                    <hr/>
                </div>

                <div class="large-8 medium-12 columns social-signin large-centered">
                    <div id="googlePlusSignIn" class="social-login-button social-login-gplus" data-gapiattached="true">Sign in with Google+</div>
                    <div id="facebookSignIn" class="social-login-button social-login-facebook">Sign in with Facebook</div>
                    <small class="secondary-cta">We respect your privacy and will never<br/> post without your permission.</small>
                </div>
            </div>
        )
    }
}

export default SigninForm;