import React, {Component} from 'react';

import {connect} from "react-redux";
import {searchUsers} from "../../actions/satishActions";
import SearchBar from "./SearchBar";
import ListCard from "./ListCard";
import _ from "lodash";
import * as API from '../../api/API';

class FindUsers extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        // this.props.searchUsers();
    //    Action Here
        API.searchUsers()
            .then((res)=>{
                console.log("resa----->"+JSON.stringify(res));

            });
    }

    render() {
        console.log("user",this.props.users);
        return (
            <div>
                <SearchBar user="user"/>


            </div>
        )
    }
}


export default (FindUsers);
