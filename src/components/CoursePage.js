import React, { useState, useEffect } from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

const CoursePage = () => {
    let [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses().then(courses => setCourses(courses));
    }, []);

    return <>
        <h2>Courses</h2>
        <CourseList courses={courses} />
    </>
}

export default CoursePage;