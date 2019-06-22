import React from 'react';
import { connect } from 'react-redux';
import { resetCal } from "../actions/DayAction";

class ResetCalButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return this.props.resetCal();
    };
    //TODO: add styling for reset cal - > centering/width
    render() {
        return (
            <div>
                <button className={'ResetCal'} onClick={this.handleClick}>Reset Calendar</button>
            </div>
        )
    }

}

export default connect(null,{resetCal})(ResetCalButton)