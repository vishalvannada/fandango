import React, {Component} from 'react';
// import BrandBar from './home/brandBar'
// import MegaDropDownHeader from './home/megaDropDownHeader';
// import MovieTopSection from './movieOverview/movieTopSection';
// import CastCrewCarousel from './movieOverview/castCrewCarousel';
import {connect} from "react-redux";
// import {getSearchedMoviesAdmin} from "../../actions/vishalActions";
// import MovieSearchList from './adminMovieSearch/moviesSearchList';
// import swal from 'sweetalert';
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
class Searchmovie extends Component {

    render() {

        return (
            <div>

                <form >

                    <button type="submit" className="btn m-2">Go</button>
                </form>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return {moviesSearchList: state.moviesSearchList}
// }

export default (Searchmovie);
