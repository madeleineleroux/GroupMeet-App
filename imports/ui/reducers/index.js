import { combineReducers } from "redux";
import WeekReducer from "./WeekReducer";
import TaskReducer from "./TaskReducer";
import GroupReducer from "./GroupReducer";
import GroupsReducer from "./GroupsReducer"
import OverviewReducer from "./OverviewReducer";

export default combineReducers({
    WeekReducer,
    TaskReducer,
    GroupReducer,
    GroupsReducer,
    OverviewReducer
});