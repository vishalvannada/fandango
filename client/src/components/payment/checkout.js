import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Seat from 'material-ui/svg-icons/notification/airline-seat-flat-angled';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CheckOut extends Component {


    // componentDidMount(){
    //     this.props.getMoviesInHomePageCarousel()
    // }

    render() {
        return (
            <div>
                <div className="background-fandango-checkout">
                    <div className="checkOut-container">

                        <Link to="/home">
                            <img className="megaDropDown-brand mt-1"
                                 src="https://images.fandango.com/mobile/web/img/assets/logo-fandango.svg"/>
                        </Link>
                        <br/>

                        <div className="row mt-3">

                            <div className="col-md-3">
                                <h2 className="font-condensed-bold color-darkgray">CHECKOUT</h2>
                            </div>

                            <div className="col-md-8">
                                {/*<ul class="breadcrumb">*/}
                                    {/*<li class="tickets complete"><i class="icon"></i>Tickets</li>*/}
                                    {/*<li class="payment "><i class="icon"></i>Payment</li>*/}
                                    {/*<li class="confirmation "><i class="icon"></i>Confirmation</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-7 background-white m-2">
                                <br/>
                                <hr/>
                                <h4 className="font-condensed-bold color-darkgray">HOW MANY TICKETS?</h4>
                                <hr/>
                                <button className="btn font-size-13 align-right my-2">
                                    Continue to Seat Selection
                                </button>
                                <br/>
                                <br/>
                                <hr/>


                                <h4 className="font-condensed-bold color-darkgray">FOR FANDANGO VIPS</h4>
                                <p className="font-size-14 color-darkgray">This feature is not yet open</p>
                            </div>

                            <div className="col-md-4 background-white m-2">

                                <hr/>

                                <div className="row">
                                    <div className="col-md-5">

                                        <img className="width-100"
                                             src="http://image.tmdb.org/t/p/w200/jnAtRqnP4mVZZmrJd2AOtU6t1zu.jpg"/>

                                    </div>

                                    <div className="col-md-6">

                                        <h3 className="font-condensed-bold color-darkgray">RAMPAGE</h3>

                                        <br/>

                                        <h6 className="font-size-14 font-family-roboto font-weight-700 color-darkgray">Friday,
                                            Apr
                                            20<br/>
                                            11:15 AM </h6>


                                        {/*<MuiThemeProvider>*/}
                                        {/*<Seat/>*/}
                                        {/*</MuiThemeProvider>*/}


                                    </div>

                                </div>
                                <br/>

                                <div className="theatre-info">
                                    <span
                                        className="font-family-roboto font-weight-700">CineLux Almaden Cafe & Lounge</span>
                                    <br/>
                                    <span className="font-size-13 font-family-roboto">2306 Almaden Road</span>
                                    <br/>
                                    <span className="font-size-13 font-family-roboto">San Jose, CA 95125</span>
                                    <br/>
                                    <br/>
                                    <span className="font-size-13 font-family-roboto">
                                        Auditorium 7
                                    </span>
                                </div>

                                <br/>
                                <hr/>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {home: state.home}
// }

export default connect(null, null)(CheckOut);
