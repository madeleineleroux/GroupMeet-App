import { Meteor } from 'meteor/meteor';

export const fetchGroupsSuccess = (payload) => {
    return {
        type: 'FETCH_GROUP',
        payload
    }
};

export const fetchGroup = () => {
    // return (dispatch) => {
        return Meteor.call('fetchGroups', (err, result) => {
            if (!err) {
                dispatch(fetchGroupsSuccess(result));
            } else {
                console.log(err);
            }
        })
    // }
};

export const updateGroupSuccess = (payload) => (
    {
    type: 'UPDATE_GROUP',
    payload
});

export const updateGroup = (name) => {
    // return (dispatch) => {
        return Meteor.call('updateGroups', name, (err, result) => {
            if (!err) {
                dispatch(updateGroupSuccess(result));
            } else {
                console.log(err);
            }
        });
    // };
};

export const getGroupSuccess = (payload) => (
    {
    type: 'UPDATE_GROUP',
    payload
});

export const getGroup = (name) => {
        return Meteor.call('getGroup', name, (err, result) => {
            if (!err) {
                console.log('no errors');
            } else {
                console.log('error')
            }
        });
};