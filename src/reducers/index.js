import { combineReducers } from "redux";
import CalendarReducer from './CalendarReducer';
import DayReducer from './DayReducer';
import CellReducer from './CellReducer';

export default combineReducers({
    CalendarReducer,
    DayReducer,
    CellReducer
})