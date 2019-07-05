//TODO: refactor for DB/async
export const addTask = ( text, member, id ) => {
    return {
        type: 'ADD_TASK',
        payload: text,
        member: member,
        id
    }
};

//Toggles task status - complete/incomplete
//TODO: may be reversed t/f
export const toggleStatus = id => {
    return {
        type: 'TOGGLE_STATUS',
        id
    }
};

//TODO Edit task

//?? Add group member

//TODO Delete task