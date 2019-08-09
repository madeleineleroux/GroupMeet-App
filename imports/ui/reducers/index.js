import { combineReducers } from "redux";
import WeekReducer from "./WeekReducer";
import TaskReducer from "./TaskReducer";
import GroupReducer from "./GroupReducer";
import GroupsReducer from "./GroupsReducer"

export default combineReducers({
    WeekReducer,
    TaskReducer,
    GroupReducer,
    GroupsReducer,
});