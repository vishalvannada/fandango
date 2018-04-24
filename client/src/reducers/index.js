import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './reducer_home';
import MovieOverviewReducer from './reducer_movie_overview'
import UserReducer from "./reducer_user";
import fetchUserReducer from "./reducer_fetchuser";
import userProfile from "./reducer_userprofile";
const rootReducer = combineReducers({
    home: HomeReducer,
    movieOverview: MovieOverviewReducer,
    user: UserReducer,
    getUser: fetchUserReducer,
    userProfile: userProfile,
    form : formReducer
});

export default rootReducer;
