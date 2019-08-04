import React from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import Day from "../WeekView/Day";
import Task from "../TaskView/Task";

class MemberScheduleTasks extends React.Component {
    render() {
        return (
            <div id='MemberScheduleTasks'>

                <Card id='OverviewCard'>
                    <Card.Header id='CardHeader'>
                        <Card.Title>Today's Availability</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup>
                            <ListGroupItem>One</ListGroupItem>
                            <ListGroupItem>Two</ListGroupItem>
                            <ListGroupItem>Three</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>

                <Card id='OverviewCard'>
                    <Card.Header id='CardHeader'>
                        <Card.Title>My Tasks</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup id="scrollableBody" className="list-group-flush">
                            {this.props.tasks && this.props.tasks.map(task => (
                                <Task member={this.props.groupMember} key={task.taskId} id={task.taskId} status={task.status}
                                      text={task.description}/>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
        // return (
        //     <div id='MemberScheduleTasks'>
        //         <Card id='OverviewCard'>
        //             <Card.Body>
        //                 <Card.Text>SOME STUFF</Card.Text>
        //                 <ListGroup>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                 </ListGroup>
        //             </Card.Body>
        //         </Card>
        //         <Card id='OverviewCard'>
        //             <Card.Body>
        //                 <Card.Text>SOME STUFF</Card.Text>
        //                 <ListGroup>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                     <ListGroupItem>asfdsafsdf</ListGroupItem>
        //                 </ListGroup>
        //             </Card.Body>
        //         </Card>
        //     </div>
        // )
    }
}

export default MemberScheduleTasks