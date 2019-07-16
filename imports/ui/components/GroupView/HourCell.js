import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchGroup} from "../../actions/GroupAction";

class HourCell extends Component {

    render() {
        if (typeof this.props.hours !== 'undefined' ) {
            return <td style={this.props.hours.availability ? {backgroundColor: "#1CCAD8"} : {backgroundColor: "#E2E2E2"}}></td>
        }
        return (
            <td></td>
        )
    }
}

export default HourCell;