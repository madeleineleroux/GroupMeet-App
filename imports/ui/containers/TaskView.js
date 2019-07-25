import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from "react-bootstrap/Container";
import TaskGroup from "../components/TaskView/TaskGroup";
import Users from "../../api/users";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';

//https://codebrahma.com/reactive-subscriptions-in-meteor/


class TaskView extends Tracker.Component {
    constructor(props) {
        super(props);
        this.subscribe('users_tasks');
    }

    render() {
    return (
            <div>
                <Container id="cardContainer">
                    <TaskGroup groupMembers={this.props.userTasks}/>
                </Container>
            </div>
        );
    }
}

export const TaskTracker = withTracker(({ groupMembers }) => {
    Meteor.subscribe('users_tasks');
    const handle = Meteor.subscribe('users_tasks');
    const isReady = handle.ready();

    if (!isReady) {
        return {
            userTasks: groupMembers
        };
    } else {
        const allUsers = Users.find({});
        let userObj = {};

        allUsers.forEach((user => {
            userObj[user._id] = {
                name: user.name,
                avatar:user.avatar,
                tasks: user.tasks
            }
        }));
        //console.log(userObj);
        return {userTasks: userObj};
    }
})(TaskView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});

export default connect(mapStateToProps)(TaskTracker);
