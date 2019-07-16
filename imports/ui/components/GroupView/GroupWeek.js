import React, { Component } from 'react';
import GroupTable from './GroupTable';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import GroupSchedule from "../../../api/group";
import {connect} from "react-redux";
import Tracker from 'tracker-component';
import Spinner from "react-bootstrap/Spinner";


class GroupWeek extends Tracker.Component {

    constructor(props) {
        super(props);
        this.subscribe('group');
        this.handleNextWeek = this.handleNextWeek.bind(this);
        this.handleLastWeek = this.handleLastWeek.bind(this);
    }

    handleNextWeek = e => {
        e.preventDefault();
        this.props.nextWeek(this.props.group._id);
    };

    handleLastWeek = e => {
        e.preventDefault();
        this.props.lastWeek(this.props.group._id);
    };

        render() {
        let moment = require('moment/moment');
        moment.defaultFormat = "YYYYMMDD";
        let currMoment = moment(this.props.group._id, "YYYYMDD");
        let month = currMoment.startOf('week').format("MMMM");

        if (!currMoment.isValid()) {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        return (
            <div className="groupDiv">
                <div className="triangle-left triangle" onClick={this.handleLastWeek}></div>
                <div id="table">
                    <h1 id="month">{month}</h1>
                    <GroupTable moment={currMoment} group={this.props.groupSchedule}/>
                </div>
                <div className="triangle-right triangle" onClick={this.handleNextWeek}></div>
                <div>
                    <div className="availableBox">Available</div>
                    <div className="busyBox">Busy</div>
                </div>
            </div>
        )
        }
}

export const TableTracker = withTracker (({ groupSchedule }) => {
    Meteor.subscribe('group');
    const handle = Meteor.subscribe('group');
    const isReady = handle.ready();

    if (!isReady) {
        console.log("NO");
        return {groupSchedule: groupSchedule};
    } else {
        console.log("CHANGE");
        return {groupSchedule: GroupSchedule.find({_id: groupSchedule._id})}
    }
})(GroupWeek);

const mapStateToProps = state => ({
    groupSchedule: state.GroupReducer
});


export default connect(mapStateToProps)(TableTracker);
