import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { toggleAvail } from '../actions/DayAction'
import Day from '../components/Day' 

class CalendarView extends Component {

    // generateWeek = (curDate) => {
    //     return
    // }

    render() {
        return (

            <div>
                <Day times = {this.props.times} id = {this.props.key}/>
            </div>
        );
    }
}

CalendarView.propTypes = {};

const mapStateToProps = state => {
    return {
        times: state
    }
};

export default connect(mapStateToProps,)(Day)
