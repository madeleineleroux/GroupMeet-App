import { combineReducers } from "redux";
import CalendarReducer from './CalendarReducer';
import WeekReducer from './WeekReducer';

export default combineReducers({
    WeekReducer,
    CalendarReducer,
});