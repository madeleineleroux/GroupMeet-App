import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GroupProgress from "../components/OverviewView/GroupProgress";
import MemberScheduleTasks from "../components/OverviewView/MemberScheduleTasks";
import Users from "../../api/users";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import { connect } from 'react-redux';
import Spinner from "react-bootstrap/Spinner";

class OverviewView extends Component {
    constructor(props) {
        super(props);
    }
    //TODO: user_id hardcoded id for testing purposes, will replace with Meteor.userId()
    render() {
        let user_id = "jQ79NAy265tvdnpKR";//Meteor.userId(); //TODO: replace with Meteor.userId() when possible
        if (typeof user_id === 'undefined') {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        console.log(this.props.groupMembers);
        let memberTasks = Object.entries(this.props.groupMembers).filter( element =>

            element[0] == user_id);
        console.log(memberTasks);
        return (
            <div id="overview">
                <Container>
                    <GroupProgress groupMembers={this.props.groupMembers}/>
                    <MemberScheduleTasks
                        groupMember={user_id}
                        tasks={memberTasks[0] && memberTasks[0][1] && memberTasks[0][1].tasks}
                    />
                </Container>
            </div>
        );
    }
}

// export const OverviewTaskTracker = withTracker(({ groupMembers }) => {
//     Meteor.subscribe('users_tasks');
//     const handle = Meteor.subscribe('users_tasks');
//     const isReady = handle.ready();
//
//     if (!isReady) {
//         return {
//             userTasks: groupMembers
//         };
//     } else {
//         const allUsers = Users.find({});
//         let userObj = {};
//
//         allUsers.forEach((user => {
//             userObj[user._id] = {
//                 tasks: user.tasks
//             }
//         }));
//         return {userTasks: userObj};
//     }
// })(OverviewView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});

export default connect(mapStateToProps)(OverviewView);
