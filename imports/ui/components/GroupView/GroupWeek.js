import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hour from "./Hour";
import Table from "react-bootstrap/Table";
import TaskMember from "../TaskView/TaskMember";
import {nextWeekGroup, prevWeekGroup} from "../../actions/GroupAction";
import Button from "react-bootstrap/Button";
import GroupReducer from "../../reducers/GroupReducer";
import Container from "react-bootstrap/Container";


class GroupWeek extends Component {

    constructor(props) {
        super(props);
        this.handleNextWeek = this.handleNextWeek.bind(this);
        this.handleLastWeek = this.handleLastWeek.bind(this);
    }

    handleNextWeek = e => {
        e.preventDefault();
        this.props.lastWeek(this.props.group._id);
    };

    handleLastWeek = e => {
        e.preventDefault();
        this.props.nextWeek(this.props.group._id);
    };

        render() {
        const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        return (
            <div className="groupDiv">
                <div className="triangle-left triangle" onClick={this.handleLastWeek}></div>
                <div id="table">
                    <Table hover className="groupTable">
                        <thead>
                        <th></th>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                        </thead>
                        <tbody>
                        {HOURS.map(hour => (
                            <Hour id={hour} key={hour}/>
                        ))}
                        </tbody>
                    </Table>
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