import React, { Component } from 'react';
import WeekTable from "./WeekTable";
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import GroupSchedule from "../../../api/group";
import {connect} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import WeekFooter from "./WeekFooter";


class Week extends Component {

    constructor(props) {
        super(props);
        this.nextWeek = this.nextWeek.bind(this);
        this.prevWeek = this.prevWeek.bind(this);
    }

    nextWeek = e => {
        e.preventDefault();
        this.props.nextWeekI(this.props.week);
    };

    prevWeek = e => {
        e.preventDefault();
        this.props.prevWeekI(this.props.week);
    };

    render() {
        let moment = require('moment/moment');
        moment.defaultFormat = "YYYYMMDD";

        let weekLine;
        let thisWeek = moment().startOf('week');
        let passedInDate = moment(this.props.availability.date, 'YYYYMMDD');
        let currMoment = moment(this.props.week.date, "YYYYMDD");
        let month = currMoment.startOf('week').format("MMMM");

        if (thisWeek.isBefore((passedInDate.format()))) {
            weekLine = true;
        } else {
            weekLine = false;
        }

        if (!currMoment.isValid()) {
            return <Spinner id="spinning" animation="border" role="status"/>
        }

        return (
            <div className="groupDiv">
                <div id={weekLine ? "noClick" : "clickRight"}className="triangle-left triangle" onClick={this.prevWeek}></div>
                <div id="table">
                    <h1 id="month">{month}</h1>
                    <WeekTable moment={currMoment} week={this.props.week}/>
                </div>
                <div id={weekLine ? "clickLeft" : "noClick"} className="triangle-right triangle" onClick={this.nextWeek}></div>
                <WeekFooter date={this.props.availability.date}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    availability: state.WeekReducer
});


export default connect(mapStateToProps)(Week);
