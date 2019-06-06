import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'net';
import { toggleAvail } from '../actions/DayAction'
import Day from '../components/Day' 

class CalendarView extends Component {

    generateWeek = (curDate) => {
        return 
    }

    render() {

        return (
            <div>
                {/*rename the state below */}
                <Day times = {this.props.times} id = {this.props.key}/>
            </div>
        );
    }
}

CalendarView.propTypes = {};

const mapStateToProps = dispatch => ({
    toggleAvail: time => dispatch(toggleAvail(time))
})

// export default connect(mapStateToProps)(Day)
export default CalendarView
