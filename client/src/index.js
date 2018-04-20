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
import SecretPage from './components/secretPage';
import Signin from "./components/signin";
import SignUp from "./components/signUp";



const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/movietime" component={MovieTime}/>
                    <Route path="/movie-overview/:tmdbid" component={MovieDetail}/>
                    <Route path="/secret" component={SecretPage}/>
                    <Route path="/signin" component={Signin}/> {/*satish*/}
                    <Route exact path="/signup" render={(props)=>{return <SignUp/>}}/> {/* Added by Rishith */}{/*Need Conditional Rendering*/}
                    <Route path="/" component={Home}/>

                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
