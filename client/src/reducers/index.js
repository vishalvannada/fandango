import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './reducer_home';
import MovieOverviewReducer from './reducer_movie_overview'
import  MovieSearchPage from './reducer_movie_search_page'
import moviesDropdown from './reducer_moviesnHalls'
import MoviesAdded from './reducer_addMovie'



const rootReducer = combineReducers({
    home: HomeReducer,
    movieOverview: MovieOverviewReducer,
    moviesSearchPagePK:MovieSearchPage,
    moviesDropdown:moviesDropdown,
    addMovies:MoviesAdded,
    form : formReducer
});

export default rootReducer;
