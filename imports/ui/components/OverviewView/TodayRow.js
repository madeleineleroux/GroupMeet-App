import React from "react";
import {connect} from 'react-redux';

class TodayRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let availability = this.props.allHours && this.props.day && this.props.hour &&
            this.props.allHours.hours.byId[this.props.day.concat("_", this.props.hour)].availability;
        return (
            <tr>
                <td id='groupSide'>{this.props.hour}</td>
                <td id={availability ? 'active' : 'album'} className="calCell">
                    {availability}
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => ({
    allHours: state.WeekReducer
});

export default connect(mapStateToProps)(TodayRow)