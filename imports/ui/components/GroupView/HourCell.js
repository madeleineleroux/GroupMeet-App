import React, { Component } from 'react';
import { connect } from 'react-redux';

class HourCell extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <td style={this.props.allIds[this.props.id] ? {backgroundColor: "#1CCAD8"} : {}}></td>
        )
    }
}

const mapStateToProps = state => ({
    allIds: state.GroupReducer
});

export default connect(mapStateToProps)(HourCell);
