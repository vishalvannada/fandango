import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
// import HomeReducer from './reducer_home';
// import MovieOverviewReducer from './reducer_movie_overview';
//
// import  MovieSearchPage from './reducer_movie_search_page'
// import EditMovieHall from './reducer_getMovieHallListing'
// import editMovieSaved from './reducer_editHallSave'
// import moviesDropdown from './reducer_moviesnHalls';
// import MoviesAdded from './reducer_addMovie';
// import MoviesSearchListAdmin from './reducer_search_movies_admin';
// import SavePayments from './reducer_savePayments'
import UserReducer from "./reducer_user";
import SearchUsersList from "./reducer_searchusers";

// import fetchUserReducer from "./reducer_fetchuser";
// import userProfile from "./reducer_userprofile";
// import {SIGN_OUT} from "../actions/satishActions";


const rootReducer = combineReducers({
    user: UserReducer,
    searchUsers: SearchUsersList,
    form : formReducer
});

// const rootReducer = (state, action) => {
//     if (action.type === SIGN_OUT) {
//         console.log(action)
//         state = undefined;
//         console.log(state);
//     }
//     return appReducer(state, action)
// }

export default rootReducer;
