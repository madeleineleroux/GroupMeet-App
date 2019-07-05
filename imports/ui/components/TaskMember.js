import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";
import TaskInputForm from "./TaskInputForm";
import TaskProgressBar from "./TaskProgressBar";

const TaskMember = ({tasksByIds, tasks, name}) => {
        return (
            <Card>
                <Card.Title className="text-center">{name}</Card.Title>
                <Card.Body>
                    <TaskInputForm key={name} groupMember={name}/>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {tasks && tasks.map(task => (
                        <Task key={task} id={task} status={tasksByIds[task].complete}
                              text={tasksByIds[task].description}/>
                    ))}
                </ListGroup>
                <Card.Body>
                    <TaskProgressBar key={name} tasks={tasks}/>
                </Card.Body>
            </Card>
        )
};

const mapStateToProps = state => ({
    tasksByIds: state.TaskReducer.Tasks
});

export default connect(mapStateToProps)(TaskMember)