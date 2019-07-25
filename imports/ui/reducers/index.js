import { combineReducers } from "redux";
import WeekReducer from "./WeekReducer";
import TaskReducer from "./TaskReducer";
import GroupReducer from "./GroupReducer";
import OverviewReducer from "./OverviewReducer";

export default combineReducers({
    WeekReducer,
    TaskReducer,
    GroupReducer,
    OverviewReducer
});