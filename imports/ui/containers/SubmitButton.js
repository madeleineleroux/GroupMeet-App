import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { submitSchedule } from "../actions/DayAction";


class SubmitButton extends Component {
    render() {
        return <Button  id="footer-button"  onClick={this.handleSubmitSchedule}> Submit </Button>
    }

    handleSubmitSchedule = e => {
        e.preventDefault();
        console.log(this.props.schedule);
        this.props.onSubmitSchedule(this.props.schedule);

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSchedule: sched => {
            dispatch(submitSchedule(sched));
        }
    }
};

const mapStateToProps = (state) => {
    return { schedule: state.WeekReducer };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmitButton);