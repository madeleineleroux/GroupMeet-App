export const fetchGroupScheduleSuccess = (payload) => {
    return {
        type: 'FETCH_GROUP',
        payload
    }
};

export const fetchGroup = () => {
    return (dispatch) => {
        return Meteor.call('fetchGroupSchedule', (err, result) => {
            if (!err) {
                dispatch(fetchGroupScheduleSuccess(result));
            } else {
                console.log("Couldn't fetch group schedule");
            }
        })
    }
};

export const getNextWeekSuccess = (payload) => {
    return {
        type: 'NEXT_WEEK_GROUP',
        payload
    }
};

export const nextWeekGroup = (currWeek) => {
    return (dispatch) => {
        return Meteor.call('getNextWeek', currWeek, (err, result) => {
            if (!err) {
                dispatch(getNextWeekSuccess(result));
            } else {
                console.log("Couldn't get next week");
            }
        })
    }
};

export const getPrevWeekSuccess = (payload) => {
    return {
        type: 'PREV_WEEK_GROUP',
        payload
    }
};

export const prevWeekGroup = (currWeek) => {
    return (dispatch) => {
        return Meteor.call('getPrevWeek', currWeek, (err, result) => {
            if (!err) {
                dispatch(getPrevWeekSuccess(result));
            } else {
                console.log("Couldn't fetch group schedule");
            }
        })
    }
};

