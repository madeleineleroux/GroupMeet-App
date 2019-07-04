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

export const submitSchedule = () => ({
    type: 'SUBMIT_SCHEDULE'
});

export const fetchSchedule = () => ({
    type: 'FETCH_SCHEDULE'
    // return dispatch => {
    //     Meteor.call('fetchAvailability', err => {
    //         if (!err) {
    //             dispatch(fetchScheduleSuccess())
    //         } else {
    //             console.log(err);
    //         }
    //     });
    // }
});



export const fetchScheduleSuccess = () => ({
    type: 'FETCH_SCHEDULE'
});