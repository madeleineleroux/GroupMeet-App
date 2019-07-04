import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from '../containers/SubmitButton'

const Footer = () => {
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

export default Footer