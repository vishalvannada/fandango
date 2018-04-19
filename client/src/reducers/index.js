import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './reducer_home';
import MovieOverviewReducer from './reducer_movie_overview'
import SignUpReducer from './reducer_sign_up'; /* Changed by Rishith */


const rootReducer = combineReducers({
    home: HomeReducer,
    movieOverview: MovieOverviewReducer,
    signUp:SignUpReducer,
    form : formReducer
});

export default rootReducer;
