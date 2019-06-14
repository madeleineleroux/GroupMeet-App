import uuid from 'uuid';

const timeState = {
    eight : {
        avail : false,
        tasks : [],
    },
    nine : {
        avail : false,
        tasks : [],
    },
    ten : {
        avail : false,
        tasks : [],
    },
    eleven : {
        avail : false,
        tasks : [],
    },
    twelve : {
        avail : false,
        tasks : [],
    },
    one : {
        avail : false,
        tasks : [],
    },
    two : {
        avail : false,
        tasks : [],
    },
    three : {
        avail : false,
        tasks : [],
    },
    four : {
        avail : false,
        tasks : [],
    },
    five : {
        avail : false,
        tasks : [],
    },
}

const initState = {
    //eight corresponds with time 8:00 to 8:59
    week : {
        key: uuid.v4(),
        monday : timeState,
        tuesday : timeState,
        wednesday : timeState,
        thursday : timeState,
        friday : timeState,
        saturday : timeState,
        sunday : timeState,
    }
}

const WeekReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_AVAIL':
            return {
                ...state,
                week : {
                    // action.time = !state.action.time
                }
            }
        default:
            return state
    }
}

export default WeekReducer


