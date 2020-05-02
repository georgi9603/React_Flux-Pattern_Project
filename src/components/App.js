import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';
import CoursesPage from './CoursePage';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/courses' component={CoursesPage} />
            <Route exact path='/about' component={AboutPage} />
        </div>
    );
}

export default App;