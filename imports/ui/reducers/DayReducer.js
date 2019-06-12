import uuid from 'uuid';

const initState = {
    //eight corresponds with time 8:00 to 8:59
    key: uuid.v4(),
    //Times are stored in the time object
    times : {
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
        twelve: false,
        thirteen: false,
        fourteen: false,
        fifteen: false,
        sixteen: false,
        seventeen: false,
        eighteen: false,
        nineteen: false,
    }
}

const DayReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_AVAIL':

            return {
                ...state,
                times : {
                    // action.time = !state.action.time
                }
            }
        default:
            return state
    }
}

export default DayReducer


