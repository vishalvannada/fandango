import React, {Component} from 'react';
import {connect} from "react-redux";
import {searchUsers} from "../../actions/satishActions";
import SearchBar from "./SearchBar";
import ListCard from "./ListCard";
import _ from "lodash";

class FindUsers extends Component {
    componentDidMount() {
        this.props.searchUsers();
    }

    render() {
        console.log("user",this.props.users);
        return (
            <div>
                <SearchBar user="user"/>
                <h2 className="List-user-heading font-condensed-bold">User Accounts</h2>
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

function mapStateToProps(state){
    return {users: state.searchUsers.users}
}

export default connect(mapStateToProps, {searchUsers})(FindUsers);
