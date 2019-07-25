import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteTask } from "../../actions/TaskAction";
import { connect } from 'react-redux';

class TaskDeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteTask(this.props.id, this.props.member);
    }

    render() {
        return (
            <div>
                <FontAwesomeIcon className='TaskDeleteButtonIcon' icon={faTrashAlt} onClick={this.handleClick}/>
            </div>
        )
    }
}

export default connect (null,{deleteTask})(TaskDeleteButton);