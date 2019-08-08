import React from "react";
import {Table} from "react-bootstrap";
import TodayRow from "./TodayRow";

class TodayAvailability extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
        return (
            <Table id="overviewTable">
                <tbody>
                    {HOURS.map(hour => (
                        <TodayRow key={hour}
                                  hour={hour}
                                  day={this.props.day}
                        />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default TodayAvailability