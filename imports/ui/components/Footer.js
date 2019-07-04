import React from 'react';
import ResetCalButton from "./ResetCalButton";
import SubmitButton from '../containers/SubmitButton'

const Footer = () => {
    return (
        <div>
            <p id="footer">Select the times you are busy. </p>
            <ResetCalButton/>
            <SubmitButton />
        </div>
    )
};

export default Footer