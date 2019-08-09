import Hour from "./Hour";
import React, { Component } from "react";
import GroupSchedule from "../../../api/group"
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table";
import {Meteor} from "meteor/meteor";
import { withTracker } from 'meteor/react-meteor-data';
import uuid from "uuid";
import Spinner from "react-bootstrap/Spinner";


class WeekTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let moment = require('moment/moment');
        moment.defaultFormat = "YYYYMMDD";
        const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        const DAYS = [0, 1, 2, 3, 4, 5];
        let copy = moment(this.props.week.date, "YYYYMDD");

        if (typeof this.props.group === 'undefined') {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        return (
            <Table className="groupTable">
                <thead>
                <tr>
                    <th></th>
                    <th>S</th>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                </tr>
                </thead>
                <thead>
                <tr>
                    <th></th>
                    <th>{copy.date()}</th>
                    {DAYS.map( day => (
                        <th key={uuid.v4()}>{copy.add(1, 'd').date()}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {HOURS.map(hour => (
                    <Hour h={hour} id={hour} key={uuid.v4()} allHours={this.props.week} group={this.props.group}/>
                ))}
                </tbody>
            </Table>
        )

    }
}


export default WeekTable;