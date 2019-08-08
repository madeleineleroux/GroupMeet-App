import React from "react";
import {connect} from 'react-redux';

class TodayRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let availability = this.props.allHours && this.props.day && this.props.hour &&
            this.props.allHours.hours.byId[this.props.day.concat("_", this.props.hour)].availability;
        let hour = this.props.hour;
        return (
            <tr>
                <td id='groupSide'>
                    {hour < 12 ? hour + " AM" : (hour == 12) ? "12 PM"  : (hour - 12) + " PM"}
                </td>
                <td id={availability ? 'active' : 'album'} className="overviewCell">
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