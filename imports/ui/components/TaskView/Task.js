import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem, FormCheck} from "react-bootstrap";
import {toggleStatus, editTask} from "../../actions/TaskAction";
import TaskDeleteButton from "./TaskDeleteButton";
import ContentEditable from 'react-contenteditable';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.state = {html: this.props.text};
    }

    handleClick() {
        this.props.dispatch(toggleStatus(this.props.id, this.props.member));
    };

    handleEdit = evt => {
        this.setState({html: evt.target.value});
        this.props.dispatch(editTask(this.props.id, this.props.member, evt.target.value));
    };

    render() {
        return (
            <ListGroupItem style={{ background: this.props.status % 2 === 1 ? '#1CCAD8' : '#FFFFFF'}}>
                <div id="taskListGroup">
                    <div id="taskBody">
                        <FormCheck inline id="taskCheckbox" checked={this.props.status % 2 === 1}
                                   onChange={this.handleClick} />
                        <ContentEditable html={this.state.html} onChange={this.handleEdit}/>
                    </div>
                    <TaskDeleteButton id={this.props.id} task={this.props.id} member={this.props.member}/>
                </div>
            </ListGroupItem>
        )
    }
}

export default connect()(Task)