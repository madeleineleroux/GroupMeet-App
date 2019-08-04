const GroupReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_GROUP':
            return action.payload;
        case 'UPDATE_GROUP':
            return {...state, name: action.name};
        default:
            return state;
    }
}

export default GroupReducer;