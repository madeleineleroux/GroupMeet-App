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
    return {
        type: 'UPDATE_GROUP',
        payload
    }
}

export const updateGroup = (name) => {
    return (dispatch) => {
        return Meteor.call('updateGroups', name, (err, result) => {
            if (!err) {
                dispatch(updateGroupSuccess(name));
            } else {
                console.log(err);
            }
        });
    };
};