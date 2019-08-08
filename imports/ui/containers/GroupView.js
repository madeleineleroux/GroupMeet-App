import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GroupWeek from "../components/GroupView/GroupWeek";
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Tracker from 'tracker-component';
import {nextWeekGroup, prevWeekGroup} from "../actions/GroupAction";
import {connect} from "react-redux";
import GroupSchedule from "../../api/group";

class GroupView extends Component {
    render() {
        return <GroupWeek />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        lastWeek: arrow => {
            dispatch(prevWeekGroup(arrow));
        },
        nextWeek: arrow => {
            dispatch(nextWeekGroup(arrow))
        }

    };
};

const mapStateToProps = state => ({
    group: state.GroupReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(GroupWeek)