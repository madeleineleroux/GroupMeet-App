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
            let obj = {...state,
                [action.member]:
                    {...state[action.member],
                        tasks: state[action.member].tasks.filter(task=> task.taskId !== action.id)}};
                return obj;
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