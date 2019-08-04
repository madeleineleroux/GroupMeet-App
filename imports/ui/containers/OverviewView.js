import React from 'react';
import Container from "react-bootstrap/Container";
import GroupProgress from "../components/OverviewView/GroupProgress";
import MemberScheduleTasks from "../components/OverviewView/MemberScheduleTasks";
import Users from "../../api/users";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import { connect } from 'react-redux';

class OverviewView extends Tracker.Component {
    constructor(props) {
        super(props);
        this.subscribe('users_tasks');
    }
    //TODO: user_id hardcoded id for testing purposes, will replace with Meteor.userId()
    render() {
        console.log(this.props.userTasks);
        let user_id = "ye8xNvdxhtgLPNBj2"; //TODO: replace with Meteor.userId() when possible
        let memberTasks = Object.entries(this.props.userTasks).filter( element =>
            element[0] == user_id);
        return (
            <div id="overview">
                <Container>
                    <GroupProgress groupMembers={this.props.userTasks}/>
                    <MemberScheduleTasks
                        groupMember={user_id}
                        tasks={memberTasks[0] && memberTasks[0][1] && memberTasks[0][1].tasks}
                    />
                </Container>
            </div>
        );
    }
}

export const OverviewTaskTracker = withTracker(({ groupMembers }) => {
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
                tasks: user.tasks
            }
        }));
        return {userTasks: userObj};
    }
})(OverviewView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});

export default connect(mapStateToProps)(OverviewTaskTracker);
