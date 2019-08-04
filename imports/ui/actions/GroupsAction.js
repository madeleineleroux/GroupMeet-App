import { Meteor } from 'meteor/meteor';

export const fetchGroupsSuccess = (payload) => {
    return {
        type: 'FETCH_GROUP',
        payload
    }
};

export const fetchGroup = () => {

    return (dispatch) => {
        return Meteor.call('fetchGroups', (err, result) => {
            if (!err) {
                dispatch(fetchGroupsSuccess());
            } else {
                console.log("Couldn't fetch this group");
            }
        })
    }
};

export const updateGroupSuccess = (payload) => {
    console.log('inside success')
    return {
        type: 'UPDATE_GROUP',
        payload
    }
}

export const updateGroup = (name) => {
    console.log('inside updategroup')
    return (dispatch) => {
        return Meteor.call('updateGroups', name, (err, result) => {
            if (!err) {
                console.log('inside !err')
                dispatch(updateGroupSuccess(result));
            } else {
                console.log("Couldn't create this group");
                console.log(err);
            }
        });
    };
};