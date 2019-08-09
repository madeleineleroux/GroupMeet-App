import React from 'react';
import { connect } from 'react-redux';
import {addTask} from "../../actions/TaskAction";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import {FormControl} from "react-bootstrap";
import uuid from "uuid";

//For individual group member - displayed in TaskMember Component
class TaskInputForm extends React.Component {
    groupMember;
    constructor(props) {
        super(props);
        this.taskInput = React.createRef();
        this.submitTask = this.submitTask.bind(this);
        this.state = {
            body: ''
        }
    }

    handleInputChange = e => {
        this.setState( {
            body: e.target.value
        })
    };

    submitTask() {
        const input = this.taskInput.current.value;
        if (input.trim().length > 0) {
            this.props.addTask(input, this.props.groupMember, uuid.v4());
        }
        this.handleReset();
    };

    handleReset = e => {
        this.setState({
            body:''
        })
    };

    render() {
        return (
            <InputGroup className="TaskInputForm">
                <FormControl
                    placeholder="Add a new task"
                    aria-label="Add a new task"
                    ref={this.taskInput}
                    value={this.state.body}
                    onChange={this.handleInputChange}
                    onKeyPress={event => {
                        if (event.key === "Enter") {
                            this.submitTask();
                        }
                    }}
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={this.submitTask}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
        )
    }
}

export default connect(null, {addTask})(TaskInputForm)