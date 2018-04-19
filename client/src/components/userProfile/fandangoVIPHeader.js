import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './vipheader.css';


class FandangoVIPHeader extends Component {

    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="page-header-container">
            <div className="row">
                <div className="medium-12 columns">
                    <h1 className="page-header vip-logo">
                         {/*<span className="page-header-emphasis">FANDANGO</span>*/}
                        {/*<span className="page-header-emphasis">VIP</span>*/}
                    </h1>
                    <nav className="page-navigation" role="navigation">
                        <ul className="page-navigation-list">
                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/dashboard">Dashboard</a>
                            </li>

                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/vip-plus-mypoints">My
                                VIP+ Points</a></li>

                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/insiderperks">Insider
                                Perks</a></li>
                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/mypurchases">Purchase
                                History</a></li>
                            <li className="page-navigation-item"><a className="page-navigation-link is-selected"
                                                                    href="https://www.fandango.com/account/settings">Account
                                Settings</a></li>
                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/emailpreferences">Email
                                + Preferences</a></li>
                            <li className="page-navigation-item"><a className="page-navigation-link"
                                                                    href="https://www.fandango.com/account/rewards">Partner
                                Rewards</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>);
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


export default connect(mapStateToProps, mapDispatchToProps)(FandangoVIPHeader)
