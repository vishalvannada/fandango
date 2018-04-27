import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BrandBar from '../home/brandBar';
import MegaDropDownHeader from '../home/megaDropDownHeader';
import FandangoVIPHeader from '../userProfile/fandangoVIPHeader';
import UtilityFooter from '../userProfile/utilityFooter';
import './dashboard.css';
import Footer from '../userProfile/footer';


class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit = () => {
        console.log("Delete");
        //this.props.doDelete();

    };

    render() {

        console.log(this.state, this.props)

        return (

            <div>
                <BrandBar/>
                <MegaDropDownHeader/>
                <FandangoVIPHeader name='dashboard'/>
                <div className="row">
                    <div className="large-9 columns dashboard-conatiner">


                        <header className="my-account-summary-container">

                            <div className="vip-cards">

                                <div className="vip-card users-card">
                                    <div className="panel">
                                        <div className="vip-content">
                                            <img id="AvatarImage" className="user-avatar-thumb"
                                                 src="https://images.fandango.com/r1.0.431/redesign/areas/profile/img/no-image-account-profile.png"/>{/* Write Image Source*/}

                                            <h3 className="font-condensed-bold">{this.props.user.user.firstname}</h3>

                                            <br/>
                                            <br/>
                                            <br/>
                                            <button id='delete' className="font-family-roboto btn-danger" onClick={() => {
                                                this.onSubmit()
                                            }}>Delete Account

                                            </button>

                                        </div>
                                        <div className="cta-footer " title="Your total Fandango exchange credit">
                                            Fandango Credit: <span id="FandangoCredit"></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="vip-card theater-rewards">
                                    <div className="panel vip-content clearfix">
                                        <a href="#"
                                           className="cta cta-edit ">Edit</a>
                                        <h2 className="heading-style-1 heading-size-m">Partner Rewards Cards</h2>
                                        <ul className="rewards-cards">

                                        </ul>

                                        <p className="heading-style-2">Have a theater rewards card with one of our many
                                            partners? Cool. Enter it <a href="#"
                                                                        className="cta">here</a> to start collecting
                                            your points every time you make a Fandango purchase.</p>

                                    </div>
                                </div>

                                <div className="vip-card payment-method-card">
                                    <div className="panel">
                                        <div className="vip-content payment-method">
                                            <a href="#"
                                               className="cta cta-edit  ">Edit</a>
                                            <h2 className="heading-style-1 heading-size-m">Payment Method</h2>


                                            <p className="heading-style-2">Want warp speed checkout? Store your credit
                                                card <a
                                                    href="#"
                                                    className="cta">here</a>. And, of course we promise to keep it safe
                                                and secure. </p>

                                        </div>
                                        <div className="cta-footer">
                                            <a href="#" className="cta">Check
                                                your Gift Card or Promo Code balance</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </header>

                        <div className="row insider-perks">
                            <div className="large-12 columns">
                                <h2 className="mt-4 section-header inline">My Insider Perks</h2>

                                <div className="panel">
                                    <section className="module-standard offers-module">

                                        <div className="insider-perk-container">
                                            <div className="large-4 medium-4 small-6 columns insider-perk">
                                                <article>
                                                    <img
                                                        id="MainImage"
                                                        src="http://images.fandango.com/images/homepage/content/FD_Deadpool2_300x150_offerstrip_v1.png"
                                                        alt="'Deadpool 2' Gift with Purchase"
                                                        // style="height:150px;width:300px;"
                                                    />
                                                    <h4 className="content-title"><b>'Deadpool 2' Gift with
                                                        Purchase</b></h4>

                                                    <p>Receive a FREE* exclusive 'Deadpool 2' poster with ticket
                                                        purchase (*shipping &amp; handling not included).
                                                        <br/>
                                                        <a id="CtaLink"
                                                           href="https://www.fandango.com/deadpool-2-200520/movie-times?intcmp=IMA_Deadpool2GWP_perks">
                                                                <span
                                                                    className="content-call-to-action">BUY TICKETS</span>
                                                        </a>
                                                    </p>
                                                </article>
                                            </div>


                                            <div className="large-4 medium-4 small-6 columns insider-perk">
                                                <article>
                                                    <a id="ImageLink"
                                                       href="https://www.fandango.com/avengers-infinity-war-199925/movie-times?intcmp=IMA_InfinityWarGWP_perks"><img
                                                        id="MainImage"
                                                        src="http://images.fandango.com/images/homepage/content/FD_Avengers_300x150_offerstrip_v1.png"
                                                        alt="'Avengers: Infinity War' Gift with Purchase"
                                                        // style="height:150px;width:300px;"
                                                    />
                                                        <h4 className="content-title"><b>'Avengers: Infinity War' Gift
                                                            with Purchase</b></h4>
                                                    </a>
                                                    <p>Choose 1 of 5 FREE* exclusive posters with ticket purchase
                                                        (*shipping &amp; handling not included).
                                                        <br/>
                                                        <a id="CtaLink"
                                                           href="https://www.fandango.com/avengers-infinity-war-199925/movie-times?intcmp=IMA_InfinityWarGWP_perks">
                                                                <span
                                                                    className="content-call-to-action">BUY TICKETS</span>
                                                        </a>
                                                    </p>
                                                </article>
                                            </div>


                                            <div className="large-4 medium-4 small-6 columns insider-perk">
                                                <article>
                                                    <a id="ImageLink"
                                                       href="https://www.fandango.com/ready-player-one-204139/movie-times?intcmp=IMA_RPOGWP_perks"><img
                                                        id="MainImage"
                                                        src="http://images.fandango.com/images/homepage/content/FD_ReadyPlayerOne_300x150_offerstrip_v1.png"
                                                        alt="'Ready Player One' Gift With Purchase"

                                                    />
                                                        <h4 className="content-title"><b>'Ready Player One' Gift With
                                                            Purchase</b></h4>
                                                    </a>
                                                    <p>Receive a FREE* exclusive 'Ready Player One' poster with ticket
                                                        purchase (*shipping &amp; handling not included).
                                                        <br/>
                                                    </p>
                                                </article>
                                            </div>
                                        </div>

                                    </section>
                                </div>


                            </div>
                        </div>


                    </div>


                </div>
                {/*<Footer/>*/}
                {/*<UtilityFooter/>*/}


            </div>
        )
    }

}


function mapStateToProps(store) {
    return ({});
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
