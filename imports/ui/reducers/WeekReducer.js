import uuid from 'uuid';

const timeState = {
    //eight corresponds with time 8:00 to 8:59
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
    thirteen : {
        avail : false,
        tasks : [],
    },
    fourteen : {
        avail : false,
        tasks : [],
    },
    fifteen : {
        avail : false,
        tasks : [],
    },
    sixteen : {
        avail : false,
        tasks : [],
    },
    seventeen : {
        avail : false,
        tasks : [],
    },
}

const initState = {
    key: uuid.v4(),
    week : {
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


