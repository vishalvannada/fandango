import React, { Component } from 'react';
import {Router,Route,Redirect, Switch} from "react-router-dom";
import {connect} from "react-redux";
import Home from './components/home';
import MovieTime from './components/movietime'
import MovieDetail from './components/movieOverview';
import SecretPage from './components/secretPage';
import {fetchUser} from "./actions/satishActions"
import createBrowserHistory from 'history/createBrowserHistory';
import {PrivateRoute} from "./components/PrivateRoute";
import Signin from "./components/signin";
import SignUp from "./components/signUp";
import UserProfile from "./components/userProfile/userProfile";
import Dashboard from "./components/dashboard/dashboard";
// import AddMovie from './components/addMovie'

// import MovieDetail from './components/movieOverview';
// import MovieRating from './components/movieRating';
// import SecretPage from './components/secretPage';
// import CheckOut from './components/payment/checkout';
// import CheckOutPayment from './components/payment/checkoutPayment';


export const history = createBrowserHistory();

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
       // this.props.fetchUser();
    }

    render() {
        //var logStat = this.props.user.isLoggedIn;
        var logStat = this.props.user.isLoggedIn;
        console.log("new:",logStat);

        //  console.log(this.props.user.isLoggedIn);
        return (
            <div className="App">

                <Router  history = {history}>
                    <Switch>
                        <div>
                            <Switch>
                                <PrivateRoute path="/movietime" component={MovieTime} props={logStat}/>
                                <PrivateRoute path="/movie-overview/:tmdbid" component={MovieDetail} props={logStat}/>
                                <PrivateRoute path="/secret" component={SecretPage} props={logStat}/>
                                <PrivateRoute path="/dashboard" component={Dashboard} props={logStat}/>
                                {/*<PrivateRoute path="/check-out" component={CheckOut}/>*/}
                                {/*<PrivateRoute path="/check-out-payment" component={CheckOutPayment}/>*/}
                                {/*<PrivateRoute path="/addmovie" component={AddMovie}/>*/}
                                {/*<PrivateRoute path="/movie-overview/:tmdbid" component={MovieDetail}/>*/}
                                {/*<PrivateRoute path="/movie-review/:tmdbid" component={MovieRating}/>*/}
                                <Route path="/signin" component={Signin}/> {/*satish*/}
                                <Route exact path="/signup" render={(props)=>{return <SignUp/>}}/> {/* Added by Rishith */}{/*Need Conditional Rendering*/}
                                <PrivateRoute exact path='/userprofile' component={UserProfile}/> {/* Added by Rishith */}{/*Need Conditional Rendering*/}
                                <Route path="/" component={Home}/>
                            </Switch>
                        </div>

                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state){
    return ({user : state.getUser});
}

export default connect(mapStateToProps,{fetchUser})(App);
