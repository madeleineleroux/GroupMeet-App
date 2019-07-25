//initial state loaded with sample data SINGLE GROUP
import {daysById, hoursAllIds} from "./WeekReducer";

const initialState =  {
    Members : {
        "Claire": {
            id: "Claire",
            tasks: [4,5,6]
        },
        "Madie": {
            id: "Madie",
            tasks: [1,2,3]
        },
        "Ben": {
            id: "Ben",
            tasks: [7,8,9]
        },
        "Katrin": {
            id: "Katrin",
            tasks: [10]
        },
        "Hannah": {
            id: "Hannah",
            tasks: []
        }
    },
    Tasks : {
        1: {
            id: 1,
            description: 'Be awesome',
            complete: true,
            member: "Madie"
        },
        2: {
            id: 2,
            description: 'Make stuff pretty',
            complete: true,
            member: "Madie"
        },
        3: {
            id: 3,
            description: 'Do some tasks',
            complete: false,
            member: "Madie"
        },
        4: {
            id: 4,
            description: 'Be rad',
            complete: false,
            member: "Claire"
        },
        5: {
            id: 5,
            description: 'Figure out redux',
            complete: false,
            member: "Claire"
        },
        6: {
            id: 6,
            description: 'Fold laundry',
            complete: false,
            member: "Claire"
        },
        7: {
            id: 7,
            description: 'Be cool',
            complete: false,
            member: "Ben"
        },
        8: {
            id: 8,
            description: 'Shoot some hoops',
            complete: false,
            member: "Ben"
        },
        9: {
            id: 9,
            description: 'Do some stuff',
            complete: false,
            member: "Ben"
        },
        10: {
            id: 10,
            description: 'Do some stuff',
            complete: false,
            member: "Katrin"
        }
    }
};

const TaskReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            return {...state,
                [action.member]:
                    {...state[action.member],
                        tasks: state[action.member].tasks.concat({
                            taskId: action.id,
                            description: action.payload,
                            status: 0
                        })}};
        case 'TOGGLE_STATUS':
            console.log(action.member);
            return {...state,
            [action.member]:
                {...state[action.member],
                    tasks: state[action.member].tasks.map(task =>
                        (task.taskId === action.id)
                    ? {...task, status: task.status + 1}
                    : task)
                }};
        case 'EDIT_TASK':
            return {...state,
                [action.member]:
                    {...state[action.member],
                        tasks: state[action.member].tasks.map(task =>
                            (task.taskId === action.id)
                                ? {...task, description: action.text}
                                : task)
                    }};
        case 'FETCH_TASKS':
            return action.payload;
        case 'DELETE_TASK':
            return {...state,
                [action.member]:
                    {...state[action.member],
                        tasks: state[action.member].tasks.filter(task=> task.id !== action.id)}};
        case 'CLEAR_TASKS':
            return {...state,
                [action.payload]:
                    {...state[action.payload],
                        tasks: []}};
        default:
            return state;
    }
};

export default TaskReducer