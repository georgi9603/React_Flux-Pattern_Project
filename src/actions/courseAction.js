import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes'
import * as courseApi from '../api/courseApi';

export function saveCourse(course) {
    return courseApi.saveCourse(course).then(course => {
        dispatcher.dispatch({
            action_type: actionTypes.CREATE_COURSE,
            course
        });
    })
}