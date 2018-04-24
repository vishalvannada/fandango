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
                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to='/dashboard'>Dashboard</Link>
                            </li>

                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                       to='#'>My
                                VIP+ Points</Link></li>

                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to="https://www.fandango.com/account/insiderperks">Insider
                                Perks</Link></li>
                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to="#">Purchase
                                History</Link></li>
                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to="/userprofile">Account
                                Settings</Link></li>
                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to="/userprofile">Email
                                + Preferences</Link></li>
                            <li className="page-navigation-item"><Link className="page-navigation-link"
                                                                    to="https://www.fandango.com/account/rewards">Partner
                                Rewards</Link></li>
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
