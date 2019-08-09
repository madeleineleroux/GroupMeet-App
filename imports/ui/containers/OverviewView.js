import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GroupProgress from "../components/OverviewView/GroupProgress";
import MemberScheduleTasks from "../components/OverviewView/MemberScheduleTasks";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import Spinner from "react-bootstrap/Spinner";

class OverviewView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let user_id = Meteor.userId();
        if (typeof user_id === 'undefined') {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        let memberTasks = Object.entries(this.props.groupMembers).filter( element =>
            element[0] == user_id);

        let user = this.props.groupMembers[user_id];
        if (typeof user === 'undefined') {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        return (
            <Container id="overview">
                <h1 id="pageTitle">{user.group} Overview</h1>
                <GroupProgress groupMembers={this.props.groupMembers}/>
                <MemberScheduleTasks
                    groupMember={user_id}
                    tasks={memberTasks[0] && memberTasks[0][1] && memberTasks[0][1].tasks}
                />
            </Container>
        );

    }
}


export const overTracker = withTracker(({ groupMembers }) => {
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
    if (size) return {groupMembers: userObj};
    return {groupMembers: groupMembers};
})(OverviewView);

const mapStateToProps = state => ({
    groupMembers: state.TaskReducer
});


export default connect(mapStateToProps, null)(overTracker);