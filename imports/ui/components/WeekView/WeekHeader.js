import React from 'react';

const WeekHeader = () => {
    const DAYS = [0, 1, 2, 3, 4];
    let moment = require('moment');
    moment.defaultFormat = "YYYYMMDD";
    let start = (moment().startOf('week'));
    return (
        <div id="entireHeader">
            <div id="calendarTriangle" className="triangle-left triangle" onClick={this.handleLastWeek}></div>
            <div id="entireweek">
        <div id="week">
        <span id="firstId">S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span id="lastId">S</span>
        </div>
            <div id="week">
                <span id="firstId">{start.date()}</span>
                {DAYS.map( day => (
                    <span>{start.add(1, 'd').date()}</span>
                ))}
                <span id="lastId">{start.add(1, "d").date()}</span>
            </div>
            </div>
            <div id="calendarTriangle" className="triangle-right triangle" onClick={this.handleLastWeek}></div>
        </div>
    )
}
export default WeekHeader;