import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from "react-bootstrap/Container";
import TaskGroup from "../components/TaskView/TaskGroup";
import Users from "../../api/users";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import {fetchTasks} from "../actions/TaskAction";


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
//     const handle1 = Meteor.subscribe('users_tasks');
//     const handle2 = Meteor.subscribe('users');
//     const isReady1 = handle1.ready();
//     const isReady2 = handle2.ready();
//
//     if (isReady1 && isReady2) {
//         this.props.fetchTasks();
//     }
//
//     return {userTasks: groupMembers}
// })(TaskView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});


export default connect(mapStateToProps, null)(TaskGroup);
