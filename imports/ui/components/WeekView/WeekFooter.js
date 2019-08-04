import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from './SubmitButton'

const WeekFooter = (date) => {
    let weekLine;
    let moment = require('moment/moment');

    let thisWeek = moment().startOf('week');
    console.log(date);

    return (
        <div>
            <p id="footer">Select the times you are busy. </p>
            <div id="footer-div">
            <ResetCalButton/>
            <SubmitButton />
            </div>
        </div>
    )
};



export default WeekFooter