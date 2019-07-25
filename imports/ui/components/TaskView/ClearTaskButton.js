import React from 'react';
import { Button } from 'react-bootstrap';
import { clearTasks } from "../../actions/TaskAction";
import { connect } from 'react-redux';

class ClearTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.clearTasks(this.props.member);
    };

    render() {
        return (
            <Button id="clearTasksButton" onClick={this.handleClick} block>Clear All</Button>
        )
    }

}

export default connect(null, {clearTasks})(ClearTaskButton);