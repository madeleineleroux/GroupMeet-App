import { Meteor } from 'meteor/meteor';

export const toggleAvail = id => {
    return {
        type: 'TOGGLE_AVAIL',
        id
    }
};

export const resetCal = () => ({
    type: 'RESET_CAL'
});

export const submitSchedule = (schedule) => {
    return (dispatch) => {
    return Meteor.call('updateAvailability', schedule, (err, result) => {
        if (!err) {
            dispatch(submitScheduleSuccess(result));
        } else {
            console.log('Did not submit');
        }
    });
};
};

export const submitScheduleSuccess = (schedule) => ({
    type: 'SUBMIT_SCHEDULE',
    schedule
});

export const fetchSchedule = () => {
    return (dispatch) => {
        return Meteor.call('fetchAvailability', (err, result) => {
            if (!err) {
                dispatch(fetchScheduleSuccess(result));
            } else {
                console.log('Availabilities did not update!');
            }
        });
    };
};


export const fetchScheduleSuccess = (schedule) => ({
    type: 'FETCH_SCHEDULE',
    schedule
});

export const nextWeekIndSuccess = (currWeek) => ({
    type: 'NEXT_WEEK',
    currWeek
});

export const nextWeekInd = (currWeek) => {
    return (dispatch) => {
        return Meteor.call('nextWeekAvailability', currWeek, (err, result) => {
            if (!err) {
                dispatch(nextWeekIndSuccess(result));
            } else {
                console.log('Availabilities did not update!');
            }
        });
    };
};


export const prevWeekIndSuccess = (currWeek) => ({
    type: 'PREV_WEEK',
    currWeek
});


export const prevWeekInd = (currWeek) => {
    return (dispatch) => {
        return Meteor.call('lastWeekAvailability', currWeek, (err, result) => {
            if (!err) {
                dispatch(prevWeekIndSuccess(result));
            } else {
                console.log('Availabilities did not update!');
            }
        });
    };
};