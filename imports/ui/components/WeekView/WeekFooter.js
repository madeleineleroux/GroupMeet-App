import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from './SubmitButton'

const WeekFooter = () => {
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