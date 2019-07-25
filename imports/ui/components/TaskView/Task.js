import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem, FormCheck} from "react-bootstrap";
import {toggleStatus, editTask} from "../../actions/TaskAction";
import TaskDeleteButton from "./TaskDeleteButton";
import ContentEditable from 'react-contenteditable'

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.contentEditable = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    //status, text, prints correctly, nothing else
    handleClick() {
        this.props.toggleStatus(this.props.id, this.props.member);
    };

    handleEdit = evt => {
        let newText = evt.target.value;
        this.props.editTask(this.props.id, this.props.member, newText);
    };

    render() {
        return (
            <ListGroupItem style={{textDecoration: this.props.status % 2 === 1 ? 'line-through' : 'none',
                background: this.props.status % 2 === 1 ? '#1CCAD8' : '#FFFFFF'}}>
                <div style={style}>
                    <div>
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

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

export default connect(null,{toggleStatus, editTask})(Task)