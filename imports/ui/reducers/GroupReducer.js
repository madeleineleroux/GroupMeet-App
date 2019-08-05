import {booleanHours} from "./WeekReducer";
const allHours = booleanHours();

const defaultState = {};

const GroupReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_GROUP':
            return action.payload;
        case 'PREV_WEEK_GROUP':
            return action.payload;
        case 'NEXT_WEEK_GROUP':
            return action.payload;
        case 'NO_LAST_WEEK':
            console.log("HI");
            return Object.assign({}, state, {_id: action.payload});
        default:
            return state;
    }
}

export default GroupReducer;