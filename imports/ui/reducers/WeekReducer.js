/* generates array of strings for hours, can change range, currently 8 - 17 inclusive */
const hourIds = Array.from({length: 10}, (v, i) => (i+8).toString());

export const weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

/* creates object with all hour objects in the week, hour ids are formatted as "weekday_hourNumber" */
export function hoursById() {
    const hourState = {};
    for (let i = 0; i < weekdays.length; i++) {
        for (let j = 0; j < hourIds.length; j++) {
            hourState[weekdays[i].concat("_",hourIds[j])] = {
                id: weekdays[i].concat("_",hourIds[j]),
                weekday: weekdays[i],
                availability: false,
            }
        }
    }
    return hourState;
}

export function booleanHours() {
    const hourState = {};
    for (let i = 0; i < weekdays.length; i++) {
        for (let j = 0; j < hourIds.length; j++) {
            hourState[weekdays[i].concat("_",hourIds[j])] = {
                availability: true,
                busyUsers: []
            }
        }
    }
    return hourState;
}

/* generates ids for all hours in the week */
export function hoursAllIds() {
    const hourIdsArray = [];
    for (let i = 0; i < weekdays.length; i++) {
        for (let j = 0; j < hourIds.length; j++) {
            hourIdsArray.push(weekdays[i].concat("_",hourIds[j]));
        }
    }
    return hourIdsArray;
}

/* creates object with all weekdays containing their respective hours:
* hourId is format "weekday_hour" -> all hourIds with matching weekday contained in id:weekday obj */
export function daysById() {
    let allHourIds = hoursAllIds();
    const weekState = {};
    for (let i = 0; i < weekdays.length; i++) {
        let dayHours = allHourIds.filter(hour => hour.includes(weekdays[i]));
        weekState[weekdays[i]] = {
            id: weekdays[i],
            hours: dayHours
        }
    }
    return weekState;
}

export const initState = {
    user: this.userId,
    days : {
      byId: daysById(),
      allIds : weekdays
    },
    hours : {
        byId : hoursById(),
        allIds : hoursAllIds()
    }
};

const WeekReducer = (state = initState, action) => {
    switch(action.type) {
        case 'TOGGLE_AVAIL':
            return {
                ...state,
                hours : {
                    ...state.hours,
                    byId : {
                        ...state.hours.byId,
                        [action.id] : {
                            ...state.hours.byId[action.id],
                            availability: !state.hours.byId[action.id].availability
                        }
                    }

                }

            };

        case 'RESET_CAL':
            return {
                ...state,
                hours: {
                    ...state.hours,
                    byId: hoursById()
                }
            };

        case 'SUBMIT_SCHEDULE':
            return action.schedule;

        case 'FETCH_SCHEDULE':
            return action.schedule;
        case 'NEXT_WEEK':
            return action.currWeek;
        case 'PREV_WEEK':
            return action.currWeek;

    
        default:
            return state
    }
};

export default WeekReducer;


