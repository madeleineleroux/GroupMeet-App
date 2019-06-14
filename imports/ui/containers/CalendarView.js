import React from 'react';
import { connect } from 'react-redux'
// import Week from '../components/Week'
import Day from '../components/Day';

const CalendarView = ({WeekReducer}) => (
    <div>
    {WeekReducer && WeekReducer.week && Object.entries(WeekReducer.week).map(weekday => (
            <Day key={weekday[0]} hours={weekday[1]} {...weekday}/>
    ))}
    </div>
);


const mapStateToProps = state => ({
    WeekReducer: state.WeekReducer
})

export default connect(mapStateToProps)(CalendarView)
