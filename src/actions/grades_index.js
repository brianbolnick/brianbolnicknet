import {
    FETCH_GRADE_REPORTS_START,
    FETCH_GRADE_REPORTS_END,
    SET_ERRORS
} from './types';
import axios from 'axios';
import { API_ROOT } from '../api-config';
// const token = localStorage.getItem('auth_token');
// const config = { headers: { 'AUTHORIZATION': `Bearer ${token}` } }

export function fetchGrades() {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_GRADE_REPORTS_START })
        axios.get(`${API_ROOT}/api/v1/grades`).then(response => {
            dispatch({ type: FETCH_GRADE_REPORTS_END, payload: response.data })
        }).catch(error => {
            console.log(error)
            dispatch({
                type: SET_ERRORS,
                payload: error,
                message: "There was a problem retrieving grades."
            })
        })
    };
}