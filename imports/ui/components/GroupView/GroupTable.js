import Hour from "./Hour";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import uuid from "uuid";


class GroupTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        const DAYS = [0, 1, 2, 3, 4, 5];
            return (
                <Table hover className="groupTable">
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
                        <th>{this.props.moment.date()}</th>
                    {DAYS.map( day => (
                        <th key={uuid.v4()}>{this.props.moment.add(1, 'd').date()}</th>
                    ))}
                    </tr>
                    </thead>
                    <tbody>
                    {HOURS.map(hour => (
                        <Hour id={hour} key={uuid.v4()} allHours={this.props.group}/>
                    ))}
                    </tbody>
                </Table>
            )
        }
}

export default GroupTable;