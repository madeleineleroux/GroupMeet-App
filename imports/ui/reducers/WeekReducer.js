import uuid from 'uuid';

const timeState = [
    //8 corresponds with time 8:00 to 8:59
    {
        id: 8,
        avail : false,
        tasks : [],
    },
    {
        id: 9,
        avail : false,
        tasks : [],
    },
    {
        id: 10,
        avail : false,
        tasks : [],
    },
    {
        id: 11,
        avail : false,
        tasks : [],
    },
    {
        id: 12,
        avail : false,
        tasks : [],
    },
    {
        id: 13,
        avail : false,
        tasks : [],
    },
    {
        id: 14,
        avail : false,
        tasks : [],
    },
    {
        id: 15,
        avail : false,
        tasks : [],
    },
    {
        id: 16,
        avail : false,
        tasks : [],
    },
    {
        id: 17,
        avail : false,
        tasks : [],
    },
]

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
                week: {
                    ...state.week,
                    //week.weekday === action.weekday
                    //update timestate array
                }
                // Object.entries(state.week).map(hour = >
                // (hour.id === action.id)
                //     ? {...hour, avail: !hour.avail}
                //     : avail
                // )
            };
        default:
            return state
    }
}

export default WeekReducer


