import React from 'react'
import { toggleAvail } from "../../actions/DayAction";
import { connect } from 'react-redux';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleAvail(this.props.id);
    };

    render() {
        console.log(this.props.availability);
        return (
            <td
                id={this.props.availability ? 'active' : 'album'}
                className="calCell"
                onMouseDown={this.handleClick}
            >
                {this.props.availability}
            </td>
        )
    }
}

export default connect(null,{ toggleAvail })(Cell)