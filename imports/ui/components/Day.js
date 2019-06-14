import React from 'react';
import Cell from './Cell';

const Day = (props) => (
<div className = "hourButtons">
    {this.props.hours.map(hour => (
    <Cell key={hour.id} id={hour.id} availabilitity={hour.avail}
{...hour}/>
))}
</div>
);

export default Day
