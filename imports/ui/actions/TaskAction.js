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
                console.log('Did not toggle');
            }
        });
    };
};

export const deleteTask = (id, member) => {
    return (dispatch) => {
        return Meteor.call('deleteTask', member, id, (err, result) => {
            if (!err) {
                dispatch(deleteTaskSuccess(id, member));
            } else {
                console.log('Did not delete task');
            }
        });
    };
};

export const clearTasks = (member) => {
    return (dispatch) => {
        return Meteor.call('clearTasks', member, (err, result) => {
            if (!err) {
                dispatch(clearTasksSuccess(member));
            } else {
                console.log('Did not clear tasks for', member);
            }
        });
    };
};

export const deleteTaskSuccess = (id, member) => {
    return {
        type: 'DELETE_TASK',
        payload: id,
        member: member,
        id
    }
};

export const clearTasksSuccess = (member) => {
    return {
        type: 'CLEAR_TASKS',
        payload: member,
        member
    }
};

export const editTaskSuccess = (id, member, text) => {
    return {
        type: 'EDIT_TASK',
        id,
        member,
        text
    }
};

export const editTask = (id, member, text) => {
    return (dispatch) => {
        return Meteor.call('editTaskText', id, member, text, (err, result) => {
            if (!err) {
                dispatch(editTaskSuccess(id, member, text));
            } else {
                console.log('Did not edit task text');
            }
        });
    };
};
