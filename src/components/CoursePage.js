import React, { useState, useEffect } from 'react';
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses } from '../actions/courseAction'

const CoursePage = () => {
    let [courses, setCourses] = useState(courseStore.getCourses())

    useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourses().length === 0) {
            loadCourses();
        } else {
            console.log(courses)
        }
        return () => courseStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setCourses(courseStore.getCourses())
    }

    return <>
        <h2>Courses</h2>
        <Link className='btn btn-primary' to='/course'>
            Add Course
        </Link>
        <CourseList courses={courses} />
    </>
}

export default CoursePage;