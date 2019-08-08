import React from 'react';
import { connect } from 'react-redux';
import Cell from "./Cell";

const Hour = ({ id, key, allHours }) => {
    const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    if (typeof allHours !== 'undefined' && id !== 'undefined') {
        return (
            <tr>
                <td id="groupSide">{id < 12 ? id + " AM" : (id == 12) ? "12 PM"  : (id - 12) + " PM"}</td>
                {WEEKDAYS.map(day => (
                    <Cell className="overviewCell"
                          hours={allHours[day.concat("_", id)]}
                          id={day.concat("_", id)}
                          key={day.concat("_", id)}
                          availability={allHours.hours.byId[day.concat("_", id)].availability}
                    />
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