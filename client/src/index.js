import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';
import axios from 'axios';
import Home from './components/home'


const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export const store = createStoreWithMiddleware(reducers);

// export const store = createStoreWithMiddleware();


function loggedIn() {
    console.log('looo')
    return (dispatch) => {
        const request = axios.get('http://localhost:3000/login/logincheck', {withCredentials: true}).then(response => {
            return true
        }).catch(error => {
            return false
        });
    }
}

function requireAuth(nextState, replace) {
    console.log("hereddddddd")
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        })
    }
}


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
