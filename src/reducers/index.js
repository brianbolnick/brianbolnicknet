import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import gradeReducer from './grade_reducer';


export default combineReducers({
    routing: routerReducer,
    grades: gradeReducer
});