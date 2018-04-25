import React, {Component} from 'react';
import {Router, Route, Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {fetchUser} from "./actions/satishActions"
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from "./components/PrivateRoute";
import Signin from "./components/signin";
import SignUp from "./components/signUp";
import UserProfile from "./components/userProfile/userProfile";
import Dashboard from "./components/dashboard/dashboard";
import Home from './components/home';
import MovieTime from './components/movietime';
import AddMovie from './components/addMovie';
import AdminLogin from './components/admin/adminLogin';
import MovieDetail from './components/movieOverview';
import MovieRating from './components/movieRating';
import SecretPage from './components/secretPage';
import CheckOut from './components/payment/checkout';
import CheckOutPayment from './components/payment/checkoutPayment';
import AdminMovieSearch from './components/admin/adminMovieSearch';
import AdminMovieEdit from './components/admin/adminMovieSearch/movieEdit';
import EditMovieHallListing from './components/editMovieHallListing';
import EditMovieHall from './components/editmovie';
import Error from './components/404Error';
import MovieHallSiginin from "./components/moviehallSignin";


export const history = createBrowserHistory();

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    // requireAuth(){
    //     console.log("hgfdg")
    //     this.props.fetchUser();
    // }

    render() {
        //var logStat = this.props.user.isLoggedIn;
        var logStat = this.props.user.isLoggedIn;
        //  console.log(this.props.user.isLoggedIn);

        console.log(this.props)

        if (this.props.user.isLoggingIn) {
            return (
                <div>
                    Loading
                </div>
            )
        }

        return (
            <div className="App">

                <Router history={history}>
                    <Switch>
                        <div>
                            <Switch>

                                <PrivateRoute path="/movietime" component={MovieTime} props={logStat}/>
                                <PrivateRoute path="/secret" component={SecretPage} props={logStat}/>
                                <PrivateRoute path="/dashboard" component={Dashboard}/>
                                <Route path="/check-out" component={CheckOut}/>
                                <PrivateRoute path="/check-out-payment" component={CheckOutPayment} props={logStat}/>
                                <Route path="/addmovie" component={AddMovie}/>
                                <Route path="/editmoviehall" component={EditMovieHall}/>

                                <Route path="/editmoviehalllisting" component={EditMovieHallListing}/>
                                <Route path="/admin-movies" component={AdminMovieSearch}/>
                                <Route path="/movie-overview/:tmdbid" component={MovieDetail}/>
                                <PrivateRoute path="/movie-review/:tmdbid" component={MovieRating} props={logStat}/>
                                <Route path="/admin-movie-edit/:tmdbid" component={AdminMovieEdit}/>
                                <Route path="/admin-login" component={AdminLogin}/>
                                <Route path="/secret" component={SecretPage}/>
                                <Route path="/signin" component={Signin}/> {/*satish*/}
                                <Route path="/moviehallSignin" component={MovieHallSiginin}/> {/*satish*/}
                                <Route exact path="/signup" render={(props) => {
                                    return <SignUp/>
                                }}/> {/* Added by Rishith */}{/*Need Conditional Rendering*/}
                                <PrivateRoute exact path='/userprofile'
                                              component={UserProfile}
                                              props={logStat}/> {/* Added by Rishith */}{/*Need Conditional Rendering*/}
                                <Route path="/home" component={Home}/>
                                <Route path="*" component={Error}/>

                            </Switch>
                        </div>

                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({user: state.getUser});
}

export default connect(mapStateToProps, {fetchUser})(App);