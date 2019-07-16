import React from 'react';
import { connect } from 'react-redux';
import CardDeck from "react-bootstrap/CardDeck";
import TaskMember from "./TaskMember";
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

//this is a design decision to use card deck. Alternates: CardColumns, CardGroup
const TaskGroup = ({ groupMembers }) => {
        return (
            <CardDeck>
                {Object.keys(groupMembers).map(id => (
                    <TaskMember key={id} name={groupMembers[id].name} tasks={groupMembers[id].tasks} idKey={id} {...id}/>
                ))}
            </CardDeck>
        )
}

export default TaskGroup

// const mapStateToProps = state => ({
//     groupMembers: state.TaskReducer
// });
//
// export default connect(mapStateToProps)(TaskGroup);
