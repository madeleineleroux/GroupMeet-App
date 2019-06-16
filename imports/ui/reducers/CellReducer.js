import uuid from 'uuid'
let initState = {
    key: uuid.v4(),
    available: true
}

const CellReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_AVAIL':
            return {
                ...state,
                available: !state.available
            }
        default:
            return state;
    }
}

export default CellReducer