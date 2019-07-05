import React from 'react';
import { connect } from 'react-redux';
import Day from './Day';

const Week = ({ days }) => {
    return (
        <div className="weekdays">
            {Object.keys(days).map(weekday => (
            <Day key={weekday} hours={days[weekday].hours} {...weekday}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    days: state.WeekReducer.days.byId
})

export default connect(mapStateToProps)(Week)