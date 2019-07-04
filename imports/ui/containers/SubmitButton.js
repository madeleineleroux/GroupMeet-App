import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { submitSchedule } from "../actions/DayAction";

class SubmitButton extends Component {
    render() {
        return <Button onClick={this.handleSubmitSchedule}> Submit </Button>
    }

    handleSubmitSchedule = e => {
        e.preventDefault();
        this.props.onSubmitSchedule()

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSchedule: schedule => {
            dispatch(submitSchedule());
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SubmitButton);