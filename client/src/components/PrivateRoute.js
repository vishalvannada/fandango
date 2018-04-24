import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {onComponentDidMount} from 'react-redux-lifecycle';
import {connect} from "react-redux";
import {fetchUser} from "../actions/satishActions";

class PrivateRoute extends Component {


    componentDidMount() {
        console.log("here")
        this.props.fetchUser()
    }

    render() {

        console.log(this.props.component)
        console.log(this.props.children)

        const Here = this.props.component;

        if (this.props.user.isLoggingIn) {
            return (
                <div>

                </div>
            )
        }

        return (


            <Route render={props => (
                this.props.user.isLoggedIn ? <Here {...props} user={this.props.user}/> :
                    <Redirect to={{pathname: '/signin', props: props, state: {from: props.location}}}/>
            )}/>


        )
    }
}


function mapStateToProps(state) {
    return ({user: state.getUser})
}

export default connect(mapStateToProps, {fetchUser})(PrivateRoute)