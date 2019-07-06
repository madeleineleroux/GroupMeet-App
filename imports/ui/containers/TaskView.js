import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import TaskGroup from "../components/TaskView/TaskGroup";

class TaskView extends Component {
    render() {
        return (
            <div>
                <Container>
                    <TaskGroup />
                </Container>
            </div>
        );
    }
}

export default TaskView;