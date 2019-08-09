import React from 'react';
import { connect } from 'react-redux';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Task from "./Task";
import TaskInputForm from "./TaskInputForm";
import TaskProgressBar from "./TaskProgressBar";
import Avatar from "../Avatar";
import ClearTaskButton from "./ClearTaskButton";
import Spinner from "react-bootstrap/Spinner";

const TaskMember = ({tasksByIds, tasks, name, idKey}) => {
    if (typeof name !== 'undefined' && typeof tasksByIds[idKey] !== 'undefined') {
        let url = "/avatars/";
        let ending;

        switch(tasksByIds[idKey].avatar) {
            case 'GIRAFFE':
                ending = "Giraffe.png";
                break;
            case 'PIG':
                ending = "Pig.png";
                break;
            case 'FOX':
                ending = "Fox.png";
                break;
            case 'PENGUIN':
                ending = "Penguin.png";
                break;
            case 'LIZARD':
                ending = "Lizard.png";
                break;
            case 'BEAR':
                ending ='Bear.png';
                break;
            case 'GIRAFFE':
                ending = "Giraffe.png";
                break;
            case 'SQUID':
                ending = "Squid.png";
                break;
            case 'BLUE_FISH':
                ending = "Blue_Fish.png";
                break;
            case 'BUNNY':
                ending = "Bunny.png";
                break;
            case 'CRAB':
                ending = "crab.png";
                break;
            case 'DUCK':
                ending ='Duck.png';
                break;
            case 'ELEPHANT':
                ending = "Elephant.png";
                break;
            case 'FLAMINGO':
                ending = "Flamingo.png";
                break;
            case 'JELLYFISH':
                ending = "Jellyfish.png";
                break;
            case 'LION':
                ending = "Lion.png";
                break;
            case 'TIGER':
                ending = "Tiger.png";
                break;
            case 'YELLOW_FISH':
                ending ='Yellow_Fish.png';
                break;
            case 'ZEBRA':
                ending ='Zebra.png';
                break;
            default:
                ending = "BearFace.png";
                break;
        }
        url = url + ending;

        return (
            <Card id="scrollable">
                <img className="avatar" src={url} />
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
    }

   return <Spinner id="spinning" animation="border" role="status"/>
};

const mapStateToProps = state => ({
    tasksByIds: state.TaskReducer
});

export default connect(mapStateToProps)(TaskMember)