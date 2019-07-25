import React from 'react';
import { connect } from 'react-redux';
import {ListGroupItem, FormCheck} from "react-bootstrap";
import {toggleStatus} from "../../actions/TaskAction";
import TaskDeleteButton from "./TaskDeleteButton";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    //status, text, prints correctly, nothing else
    handleClick() {
        this.props.toggleStatus(this.props.id, this.props.member);
    };

    render() {
        return (
            <ListGroupItem style={{textDecoration: this.props.status % 2 === 1 ? 'line-through' : 'none',
                background: this.props.status % 2 === 1 ? '#1CCAD8' : '#FFFFFF'}}>
                <div style={style}>
                    <div>
                        <FormCheck inline id="taskCheckbox" checked={this.props.status % 2 === 1}
                                   onChange={this.handleClick} />
                        {this.props.text}
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

export default connect(null,{toggleStatus})(Task)