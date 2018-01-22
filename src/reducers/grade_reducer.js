// eslint-disable-next-line
import {
    FETCH_GRADE_REPORTS_START,
    FETCH_GRADE_REPORTS_END,
    SET_ERRORS
} from '../actions/types';

const INITIAL_STATE = {
    error: null,
    fetching: false,
    grades: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_GRADE_REPORTS_START:            
            return { ...state, fetching: true };
        case FETCH_GRADE_REPORTS_END:
            return { ...state, fetching: false, grades: action.payload }
        case SET_ERRORS: 
            return { ...state, fetching: false, error: action.payload }
        default:
            return state;
    }
}