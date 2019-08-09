import React from 'react';
import HourCell from "./HourCell";
import uuid from "uuid";

const Hour = ({ id, allHours}) => {
    const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    if (typeof allHours !== 'undefined') {
        return (
            <tr>
                <td id="groupSide">{id < 12 ? id + " AM" : (id == 12) ? "12 PM"  : (id - 12) + " PM"}</td>
                {WEEKDAYS.map(day => (
                    <HourCell hours={allHours[day.concat("_", id)]} id={day.concat("_", id)} key={day.concat("_", id)}/>
                ))}
            </tr>
        )
    } else {
        return <tr>
            {WEEKDAYS.map(day => (
                <td key={uuid.v4()}></td>
            ))}
        </tr>

    }
}

export default Hour;
