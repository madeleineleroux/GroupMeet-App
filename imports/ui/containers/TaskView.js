import React, {Component} from 'react';
import { connect } from 'react-redux';
import TaskGroup from "../components/TaskView/TaskGroup";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class TaskView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <TaskGroup groupMembers={this.props.userTasks}/>
        );
    }
}

export const TaskTracker = withTracker(({ groupMembers }) => {
    Meteor.subscribe('tasks');
    const handle = Meteor.subscribe('tasks');
    const isReady = handle.ready();
    let userObj = {};

    if (isReady) {
        let group = Meteor.users.find({_id: Meteor.userId()}).fetch()[0];

        if (typeof group != "undefined") {
            //get all the members in the group
            group = group.profile.group;
            const allUsers = Meteor.users.find({"profile.group" : group});

            // get just the member ids
            let listOfUsers = [];

            allUsers.forEach(user => {
                listOfUsers.push(user._id)
            });

            //get all the tasks
            listOfUsers.map( user => {
                let info =  Meteor.users.find({_id: user}).fetch()[0];
                userObj[user] = {
                    tasks: info.profile.tasks,
                    group: group,
                    name: info.profile.name,
                    avatar: info.profile.avatar
                };
            });
        }
    }

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

// Get the size of an object
    var size = Object.size(userObj);
    if (size) return {userTasks: userObj};
    return {userTasks: groupMembers};
})(TaskView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});


export default connect(mapStateToProps, null)(TaskTracker);