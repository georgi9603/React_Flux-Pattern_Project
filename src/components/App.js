import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursePage';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/courses' component={CoursesPage} />
                <Route path='/about' component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;