import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem, FormCheck} from "react-bootstrap";
import {toggleStatus, editTask} from "../../actions/TaskAction";
import TaskDeleteButton from "./TaskDeleteButton";
import ContentEditable from 'react-contenteditable';

//TODO: currently when you use arrow keys, it triggers react slider.
//TODO: make arrow keys move within editable content when cursor there instead
class Task extends React.Component {
    constructor(props) {
        super(props);
        //this.contentEditable = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleClick() {
        this.props.dispatch(toggleStatus(this.props.id, this.props.member));
    };

    handleEdit = evt => {
        let newText = evt.target.value;
        console.log(newText);
        this.props.dispatch(editTask(this.props.id, this.props.member, newText));
    };

    render() {
        return (
            <ListGroupItem style={{textDecoration: this.props.status % 2 === 1 ? 'line-through' : 'none',
                background: this.props.status % 2 === 1 ? '#1CCAD8' : '#FFFFFF'}}>
                <div id="taskListGroup">
                    <div id="taskBody">
                        <FormCheck inline id="taskCheckbox" checked={this.props.status % 2 === 1}
                                   onChange={this.handleClick} />
                        <ContentEditable html={this.props.text} onChange={this.props.handleEdit}/>
                    </div>
                    <TaskDeleteButton id={this.props.id} task={this.props.id} member={this.props.member}/>
                </div>
            </ListGroupItem>
        )
    }
}

export default connect()(Task)