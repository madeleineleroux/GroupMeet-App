import React from 'react';
import { connect } from 'react-redux';
import HourCell from "./HourCell";

const Hour = ({ key, id }) => {
    const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return (
        <tr>
            <td id="groupSide">{id}</td>
            {WEEKDAYS.map(day => (
                <HourCell id={day.concat("_", id)} key={day.concat("_", id)} />
                ))}
        </tr>
    )
}

const mapStateToProps = state => ({
    hourByIds: state.WeekReducer.hours.byId
})

export default connect(mapStateToProps)(Hour);
