import React, {Component} from 'react';
import BrandBar from '../home/brandBar'
import MegaDropDownHeader from '../home/megaDropDownHeader';
import UnderBrand from '../home/underBrand';
import Carousel from '../home/carousel';
import {connect} from "react-redux";
import {getMoviesInHomePageCarousel} from "../../actions/vishalActions";
import {searchUsers} from "../../actions/satishActions";
import SearchBar from "./SearchBar";
import ListCard from "./ListCard";

class MoviehallHome extends Component {

    componentDidMount() {
        this.props.searchUsers();
    }

    render() {
        return (
            <div>
                <BrandBar/>
                <SearchBar user="user"/>
               <ListCard />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {users: state.searchUsers}
}

export default connect(mapStateToProps, {searchUsers})(MoviehallHome);
