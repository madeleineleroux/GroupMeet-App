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
        // this.state = {
        //     group: null
        // }
    }

    // componentDidMount() {
    //     let context = this;
    //     Tracker.autorun(function(){
    //         let currGroup = Meteor.user();
    //         if (currGroup != undefined) {
    //             context.setState({ group: currGroup});
    //             console.log(currGroup);
    //         }
    //     });
    // }

    render() {
        let user_id = Meteor.userId(); 
        if (typeof user_id === 'undefined') {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        let memberTasks = Object.entries(this.props.groupMembers).filter( element =>
            element[0] == user_id);

        return (
            <Container id="overview">
                <h1 id="pageTitle">Overview</h1>
                <GroupProgress groupMembers={this.props.groupMembers}/>
                <MemberScheduleTasks
                    groupMember={user_id}
                    tasks={memberTasks[0] && memberTasks[0][1] && memberTasks[0][1].tasks}
                />
            </Container>
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
