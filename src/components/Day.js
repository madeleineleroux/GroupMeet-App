import React from 'react';

// function getStyle = (availabilityAtTime) => {

// }

// function onClick = () => {
//     //This should change the state using toggleAvail, which I should input above and map
// }

const Day = ({times, key}) => {
    return (
        <div id = "hourButtons">

            <button id = 'cell'>8</button>
            <br></br>
            <button id = 'cell'>9</button>
            <br></br>
            <button id = 'cell'>10</button>
            <br></br>
            <button id = 'cell'>11</button>
            <br></br>
            <button id = 'cell'>12</button>
            <br></br>
            <button id = 'cell'>13</button>
            <br></br>
            <button id = 'cell'>14</button>
            <br></br>
            <button id = 'cell'>15</button>
            <br></br>
            <button id = 'cell'>16</button>
        </div>
    )
}

export default Day
