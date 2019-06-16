import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

const Day = ({ hours, hourByIds }) => {
    return (
        <div className = "hourButtons">
            {hours.map(hour => (
                <Cell key={hour} id={hour} availability={hourByIds[hour].availability}
                      {...hour}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    hourByIds: state.WeekReducer.hours.byId
})

export default connect(mapStateToProps)(Day);
