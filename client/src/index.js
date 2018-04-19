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

import MovieDetail from './components/movieOverview';
import MovieRating from './components/movieRating';
import SecretPage from './components/secretPage';



const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/movietime" component={MovieTime}/>
                    <Route path="/movie-overview/:tmdbid" component={MovieDetail}/>
                    <Route path="/movie-review/:tmdbid" component={MovieRating}/>
                    <Route path="/secret" component={SecretPage}/>
                    <Route path="/" component={Home}/>

                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
