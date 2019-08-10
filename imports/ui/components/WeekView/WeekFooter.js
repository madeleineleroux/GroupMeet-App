import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from './SubmitButton'

const WeekFooter = (date, group) => {
    let weekLine;
    let moment = require('moment/moment');
    moment.defaultFormat = "YYYYMMDD";

    let thisWeek = moment().startOf('week');
    let passedInDate = moment(date.date, 'YYYYMMDD');

    if (thisWeek.isBefore((passedInDate.format()))) {
        weekLine = 'Next Week';
    } else {
        weekLine = "Current Week";
    }

    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) return true
        }
        return false;
    };

    var size = Object.size(group);

    if (size) return <div></div>

    return (
        <div>
            {/*<h4>{weekLine}</h4>*/}
            <h5 id="footer">Select the times you are busy. </h5>
            <div id="footer-div">
            <ResetCalButton/>
            <SubmitButton />
            </div>
        </div>
    )
};



export default WeekFooter