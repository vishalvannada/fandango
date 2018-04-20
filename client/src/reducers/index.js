import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import HomeReducer from './reducer_home';
import MovieOverviewReducer from './reducer_movie_overview'
import UserReducer from "./reducer_user";

const rootReducer = combineReducers({
    home: HomeReducer,
    movieOverview: MovieOverviewReducer,
    user: UserReducer,
    form : formReducer
});

export default rootReducer;
