import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'tls';
import Cell from './Cell'

// function getStyle = (availabilityAtTime) => {

// function onClick = () => {
//     //This should change the state using toggleAvail, which I should input above and map
// }

const Day = ({times, key}) => {
        console.log(times.DayReducer.times);
        const hours = Object.entries(times.DayReducer.times);
    return (
        <div>
                {hours.map(hour => (
                    <Cell time={hour[1]} id={key} name={hour[0]}/>
                ))}
        </div>
    )
};

export default Day
