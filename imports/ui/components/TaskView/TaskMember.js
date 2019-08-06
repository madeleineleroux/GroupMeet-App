import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";
import TaskInputForm from "./TaskInputForm";
import TaskProgressBar from "./TaskProgressBar";
import Avatar from "../Avatar";
import ClearTaskButton from "./ClearTaskButton";

const TaskMember = ({tasksByIds, tasks, name, idKey}) => {
        return (
            <Card id="scrollable">
                <Avatar id={idKey} tasks={tasksByIds} />
                <Card.Title id="cardTitleName" className="text-center">{name}</Card.Title>
                <Card.Body>
                    <TaskInputForm key={idKey} groupMember={idKey}/>
                </Card.Body>
                <ListGroup id="scrollableBody" className="list-group-flush"
                           >
                    {tasks && tasks.map(task => (
                        <Task member={idKey} key={task.taskId} id={task.taskId} status={task.status}
                              text={task.description}/>
                    ))}
                </ListGroup>
                <Card.Body>
                    <ClearTaskButton id="clearTask" id={idKey} key={name} member={idKey}/>
                    <TaskProgressBar key={idKey} tasks={tasks}/>
                </Card.Body>
            </Card>
        )
};

const mapStateToProps = state => ({
    tasksByIds: state.TaskReducer
});

export default connect(mapStateToProps)(TaskMember)