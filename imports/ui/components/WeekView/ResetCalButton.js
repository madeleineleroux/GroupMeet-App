import React from 'react';
import { connect } from 'react-redux';
import { resetCal } from "../../actions/DayAction";
import { Button } from 'react-bootstrap';

class ResetCalButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return this.props.resetCal();
    };

    render() {
        return (
            <Button id="footer-button" className={'ResetCal'} onClick={this.handleClick}>Reset Calendar</Button>
        )
    }

}

export default connect(null,{resetCal})(ResetCalButton)