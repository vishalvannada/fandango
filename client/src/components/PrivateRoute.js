import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, ...rest, user: user, props: props}) => {

    var isLoggedIn = props;
    return (
        <Route {...rest} render={props => (
            isLoggedIn ? <Component {...props} user={user}/> :
                <Redirect to={{pathname: '/signin', props: props, state: {from: props.location}}}/>
        )}/>
    )
}