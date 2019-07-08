//TODO: refactor for DB/async
export const addTaskSuccess = ( text, member, id ) => {
    return {
        type: 'ADD_TASK',
        payload: text,
        member: member,
        id
    }
};

export const addTask = (text, member, id) => {
    return (dispatch) => {
        return Meteor.call('addTask', member, {taskId: id, description: text, status: 0}, (err, result) => {
            if (!err) {
                dispatch(addTaskSuccess(text, member, id));
            } else {
                console.log(err);
                console.log('Did not submit');
            }
        });
    };
};

export const fetchTasks = () => {
    return (dispatch) => {
        return Meteor.call('fetchAllTasks', (err, result) => {
            if (!err) {
                dispatch(fetchTasksSuccess(result));
            } else {
                console.log('Did not fetch');
            }
        });
    };
};

export const fetchTasksSuccess = (payload) => {
    return {
        type: 'FETCH_TASKS',
        payload
    }
};



//Toggles task status - complete/incomplete
//TODO: may be reversed t/f
export const toggleStatusSuccess = (id, member) => {
    return {
        type: 'TOGGLE_STATUS',
        id,
        member
    }
};

export const toggleStatus = (id, member) => {
    return (dispatch) => {
        return Meteor.call('updateTaskStatus', id, (err, result) => {
            if (!err) {
                dispatch(toggleStatusSuccess(id, member));
            } else {
                console.log(err);
                console.log('Did not toggle');
            }
        });
    };
};

//TODO Edit task

//?? Add group member

//TODO Delete task