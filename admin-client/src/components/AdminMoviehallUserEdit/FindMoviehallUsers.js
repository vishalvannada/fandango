import React, {Component} from 'react';

import {connect} from "react-redux";
import SearchBar from "../Adminedit/SearchBar";
import {searchMoviehallUsers} from "../../actions/satishActions";
import ListCard from "./ListCard";
import _ from 'lodash';

class FindMoviehallUsers extends Component {

    componentDidMount() {
        this.props.searchMoviehallUsers();
    }

    render() {
        console.log("tusers",this.props.users);
        return (
            <div>
                <SearchBar user="MoviehallUser"/>
                <h2 className="List-user-heading font-condensed-bold">Moviehall User Accounts</h2>
                {
                    _.map(this.props.users, User => {
                        console.log("user",User)
                        return  <ListCard user={User} history={this.props.history}/> ;
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {users: state.searchUsers.users}
}

export default connect(mapStateToProps, {searchMoviehallUsers})(FindMoviehallUsers);
