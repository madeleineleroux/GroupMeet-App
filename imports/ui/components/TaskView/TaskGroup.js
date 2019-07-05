import React from 'react';
import { connect } from 'react-redux';
import CardDeck from "react-bootstrap/CardDeck";
import TaskMember from "./TaskMember";

//this is a design decision to use card deck. Alternates: CardColumns, CardGroup
const TaskGroup = ({ groupMembers }) => {
        return (
            <CardDeck>
                {Object.keys(groupMembers).map(member => (
                    <TaskMember key={member} name={member} tasks={groupMembers[member].tasks} {...member}/>
                ))}
            </CardDeck>
        )
}


const mapStateToProps = state => ({
    groupMembers: state.TaskReducer.Members
});

export default connect(mapStateToProps)(TaskGroup);