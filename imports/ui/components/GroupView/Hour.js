import React from 'react';
import { connect } from 'react-redux';
import HourCell from "./HourCell";

const Hour = ({ id, allHours }) => {
    const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    if (typeof allHours !== 'undefined') {
        return (
            <tr>
                <td id="groupSide">{id}</td>
                {WEEKDAYS.map(day => (
                    <HourCell hours={allHours[day.concat("_", id)]} id={day.concat("_", id)} key={day.concat("_", id)}/>
                ))}
            </tr>
        )
    } else {
        return <tr>
            {WEEKDAYS.map(day => (
                <td></td>
            ))}
        </tr>

    }
}

export default Hour;
