import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Home from '../pages/Home'
import MoviePage from "../pages/MoviePage";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies/:movieId" exact>
                    <MoviePage />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes

