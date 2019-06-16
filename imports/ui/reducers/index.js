import { combineReducers } from "redux";
import CalendarReducer from './CalendarReducer';
import DayReducer from './DayReducer';
import CellReducer from './CellReducer';
import WeekReducer from "./WeekReducer";

export default combineReducers({
    // CalendarReducer,
    // DayReducer,
    // CellReducer,
    WeekReducer
});