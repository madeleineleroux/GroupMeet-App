import { HTTP } from 'meteor/http'
import { Meteor } from 'meteor/meteor';

const apiUrl = 'http://localhost:5000/posts';

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
            console.log(err);
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
                console.log(err);
                console.log('Availabilities did not update!');
            }
        });
    };
};


export const fetchScheduleSuccess = (schedule) => ({
    type: 'FETCH_SCHEDULE',
    schedule
});