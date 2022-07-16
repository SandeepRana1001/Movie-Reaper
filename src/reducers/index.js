import { combineReducers } from "redux";
import { all_movies, popular } from "./movie_reducer";

const allReducers = combineReducers({
    all_movies, popular
});

export default allReducers;