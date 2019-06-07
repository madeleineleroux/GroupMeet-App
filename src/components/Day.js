import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'tls';

// function getStyle = (availabilityAtTime) => {

// }

// function onClick = () => {
//     //This should change the state using toggleAvail, which I should input above and map
// }

const Day = ({times, key}) => {
    return (
        <div className = "hourButtons">
            <button className = 'cell'>8</button>
            <button className = 'cell'>9</button>
            <button className = 'cell'>10</button>
            <button className = 'cell'>11</button>
            <button className = 'cell'>12</button>
            <button className = 'cell'>13</button>
            <button className = 'cell'>14</button>
            <button className = 'cell'>15</button>
            <button className = 'cell'>16</button>
        </div>
    )
}

export default Day
