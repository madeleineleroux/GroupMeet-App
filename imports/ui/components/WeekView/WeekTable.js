import Hour from "./Hour";
import React, { Component } from "react";
import TableDragSelect from "react-table-drag-select";
import { toggleAvail } from "../../actions/DayAction";
import { connect } from 'react-redux';
import Table from "react-bootstrap/Table";


class WeekTable extends Component {
    constructor(props) {
        super(props);
        console.log(this.state.cells);
    }

    componentDidMount() {
        const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "sunday"];
        HOURS.map(hour =>
            DAYS.map( day=> this.state.cells[hour].push(this.props.week.hours.byId[day.concat("_", hour + 8)].availability)));
        console.log(this.state);
    }

    state = {
        cells: [[], [], [], [], [], [], [], [], [], []]
    };




    handleClick(){
        cells => this.setState({ cells });
        this.props.toggleAvail(this.props.id);
        console.log(this.props.id,this.props.availability);
    };

    render() {
        const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        const DAYS = [0, 1, 2, 3, 4, 5];
        console.log(this.props.week);


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
                    <th>{this.props.moment.date()}</th>
                    {DAYS.map( day => (
                        <th>{this.props.moment.add(1, 'd').date()}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {HOURS.map(hour => (
                    <Hour h={hour} id={hour} key={hour} allHours={this.props.week}/>
                ))}
                </tbody>
            </Table>
        )
    }
}

export default connect(null,{ toggleAvail })(WeekTable)