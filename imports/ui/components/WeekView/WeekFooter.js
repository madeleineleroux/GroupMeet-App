import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from './SubmitButton'
import Spinner from "react-bootstrap/Spinner";

const WeekFooter = (week) => {
    if (typeof week.group === "undefined") {
        return <div></div>
    }

    return (
        <div>
            <h5 id="footer">Select the times you are busy. </h5>
            <div id="footer-div">
            <ResetCalButton />
            <SubmitButton />
            </div>
        </div>
    )
};



export default WeekFooter