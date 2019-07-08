import React from 'react'
import { toggleAvail } from "../../actions/DayAction";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleAvail(this.props.id);
        console.log(this.props.id,this.props.availability);
    };

    render() {
        return (
            <Button
                className={this.props.availability ? 'active' : 'album'}
                variant='outline-primary'
                onDrag={this.handleClick}
                onMouseDown={this.handleClick}
            >
            </Button>
        )
    }
}

export default connect(null,{ toggleAvail })(Cell)