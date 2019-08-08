import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import Task from "../TaskView/Task";
import moment from "moment";
import { connect } from 'react-redux';
import TodayAvailability from "./TodayAvailability";

class MemberScheduleTasks extends React.Component {
    render() {
        let weekday = moment().format("dddd").toLowerCase();
        return (
            <div id='MemberScheduleTasks'>

                <Card id='OverviewCard'>
                    <Card.Header id='CardHeader'>
                        <Card.Title id='overviewCardHeader'>Today's Availability</Card.Title>
                    </Card.Header>
                    <Card.Body id="overviewCardAvailability">
                        <TodayAvailability day={weekday}/>
                    </Card.Body>
                </Card>

                <Card id='OverviewCard'>
                    <Card.Header id='CardHeader'>
                        <Card.Title id='overviewCardHeader'>My Tasks</Card.Title>
                    </Card.Header>
                    <Card.Body id="overviewCardTask">
                        <ListGroup className="list-group-flush">
                            {this.props.tasks && this.props.tasks.map(task => (
                                <Task member={this.props.groupMember} key={task.taskId} id={task.taskId} status={task.status}
                                      text={task.description}/>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    days: state.WeekReducer.days.byId
});

export default connect(mapStateToProps)(MemberScheduleTasks)