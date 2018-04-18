import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./signin.css";
import SigninForm from "./signinForm";

class SigninBody extends Component{

    render(){

        return(
            <div class="page registration " role="main">
                <div class="row">

                    <div class="double-type large-8 medium-10 small-12 large-centered medium-centered small-centered columns">
                        <div class="panel-group row">
                            <div class="panel intercept-container large-6 medium-6 small-12 columns">
                                <div class="action-details small-12 columns">
                                    <div class="vip-perks vip-perks--authentication">
                                        <div class="perks__header">
                                            Level up your movie life with Fandango VIP:
                                        </div>
                                        <div class="perks__list">
                                            <div class="perk perk--vip-plus" id="my-fandango">
                                                <div class="perk__header">
                                                    New! Earn Points, Get Movies
                                                </div>
                                            </div>
                                            <div class="perk perk--rope" id="insider-perks">
                                                <div class="perk__header">
                                                    Insider Perks
                                                </div>
                                            </div>
                                            <div class="perk perk--popcorn" id="theater-rewards">
                                                <div class="perk__header">
                                                    Partner Rewards
                                                </div>
                                            </div>
                                            <div class="perk perk--ticket" id="worry-free-tickets">
                                                <div class="perk__header">
                                                    Refunds &amp; Exchanges
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div class="registration-promo-unit hide-for-small-only">
                                    <img src="//images.fandango.com/cms/assets/aced1350-33b7-11e8-8eca-fd26e4965c58--vip-registration-banner.png" alt=""/>
                                </div>

                            </div>
                            <SigninForm/>
                        </div>
                    </div>

                </div>
            </div>


        )

    }
}

export default SigninBody;