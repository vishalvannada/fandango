import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import Home from './components/home';

import MovieTime from './components/movietime'
import AddMovie from './components/addMovie'

import MovieDetail from './components/movieOverview';
import MovieRating from './components/movieRating';
import SecretPage from './components/secretPage';
import CheckOut from './components/payment/checkout';
import CheckOutPayment from './components/payment/checkoutPayment';
import AdminMovieSearch from './components/adminMovieSearch';
import AdminMovieEdit from './components/adminMovieSearch/movieEdit';
import Error from './components/404Error';




const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>

                    <Route path="/movietime" component={MovieTime}/>
                    <Route path="/check-out" component={CheckOut}/>
                    <Route path="/check-out-payment" component={CheckOutPayment}/>
                    <Route path="/admin-movies" component={AdminMovieSearch}/>
                    <Route path="/admin-movie-edit/:tmdbid" component={AdminMovieEdit}/>
                    <Route path="/addmovie" component={AddMovie}/>
                    <Route path="/movie-overview/:tmdbid" component={MovieDetail}/>
                    <Route path="/movie-review/:tmdbid" component={MovieRating}/>
                    <Route path="/secret" component={SecretPage}/>
                    <Route path="/home" component={Home}/>
                    <Route path="*" component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
