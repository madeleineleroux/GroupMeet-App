import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Card} from "react-bootstrap";

class GroupProgress extends React.Component {
    constructor(props) {
        super(props);
        this.getProgress = this.getProgress.bind(this);
    }

    getProgress() {
        let tasks = [];
        Object.values(this.props.groupMembers).forEach(element => {
            tasks = tasks.concat(element.tasks);
        });
        let numTotalTasks = tasks.length;
        if (numTotalTasks == 0) {
            return 0;
        }
        let completedGroupTasks = tasks.filter(task => task.status % 2 == 1).length;
        return (completedGroupTasks/numTotalTasks) * 100;
    };

    render() {
        let progress = this.getProgress();
        return (
            <div id='groupProgress'>
                <Card>
                    <Card.Header>
                        <Card.Title id='overviewCardHeader'>Group Project Progress</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ProgressBar id='groupProgressBar'
                            now={progress} label={`${Math.round(progress)}%`}
                        />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default GroupProgress