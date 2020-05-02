import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursePage';
import PageNotFound from './PageNotFound';
import ManageCoursePage from "./ManageCoursePage";
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/course/:slug' component={ManageCoursePage} />
                <Redirect from='/about-page' to='/about' />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;