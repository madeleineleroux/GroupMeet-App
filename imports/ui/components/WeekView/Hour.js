import React from 'react';
import Cell from "./Cell";
import uuid from "uuid";

const Hour = ({ id, allHours, group }) => {
    const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    if (typeof allHours !== 'undefined' && typeof id !== 'undefined' && typeof group !== 'undefined') {
        return (
            <tr>
                <td id="groupSide">{id < 12 ? id + " AM" : (id == 12) ? "12 PM"  : (id - 12) + " PM"}</td>
                {WEEKDAYS.map(day => (
                    <Cell className="overviewCell"
                          hours={allHours[day.concat("_", id)]}
                          id={day.concat("_", id)}
                          key={uuid.v4()}
                          availability={allHours.hours.byId[day.concat("_", id)].availability}
                          group={group}
                    />
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