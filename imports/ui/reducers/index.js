import { combineReducers } from "redux";
import WeekReducer from "./WeekReducer";
import TaskReducer from "./TaskReducer";

export default combineReducers({
    WeekReducer,
    TaskReducer
});