import React, {Component} from 'react';
import {connect} from "react-redux";
import Week from "../components/WeekView/Week";
import {nextWeekInd, prevWeekInd} from "../actions/DayAction";


class WeekView extends Component {
    render() {
        return (
            <Week />
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        prevWeekI: arrow => {
            dispatch(prevWeekInd(arrow));
        },
        nextWeekI: arrow => {
            dispatch(nextWeekInd(arrow))
        }

    };
};

const mapStateToProps = state => ({
    week: state.WeekReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Week)
