import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from "react-bootstrap/Container";
import TaskGroup from "../components/TaskView/TaskGroup";
import Users from "../../api/users";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';

//https://codebrahma.com/reactive-subscriptions-in-meteor/


class TaskView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
            <div>
                <div>
                    <TaskGroup />
                </div>
            </div>
        );
    }
}

// export const TaskTracker = withTracker(({ groupMembers }) => {
//     Meteor.subscribe('users_tasks');
//     const handle = Meteor.subscribe('users_tasks');
//     const isReady = handle.ready();
//
//     if (!isReady) {
//         return {
//             userTasks: groupMembers
//         };
//
//     } else {
//         const allUsers = Users.find({});
//         let userObj = {};
//
//         allUsers.forEach((user => {
//             userObj[user._id] = {
//                 name: user.name,
//                 avatar:user.avatar,
//                 tasks: user.tasks
//             }
//         }));
//         return {userTasks: userObj};
//     }
// })(TaskView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});

export default connect(mapStateToProps, null)(TaskGroup);
