import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Card} from "react-bootstrap";

class GroupProgress extends React.Component {
    constructor(props) {
        super(props);
        this.getProgress = this.getProgress.bind(this);
    }

    getProgress() {
        //TODO: implement: currently set to dummy % progress

        // let numTotalTasks = this.props.tasks.length; // need to refactor for group tasks
        let numTotalTasks = 100;

        if (numTotalTasks == 0) {
            return 0;
        }

        //let completedGroupTasks = this.props.tasks.filter(task => task.status % 2 == 1).length; //refactor for group
        let completedGroupTasks = 25;
        return (completedGroupTasks/numTotalTasks) * 100;
    };

    render() {
        let progress = this.getProgress();
        return (
            <div id='groupProgress'>
                <Card>
                    <Card.Header>
                        <Card.Title>Group Project Progress</Card.Title>
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

//TODO: get group tasks -> pass in as prop?

// const mapStateToProps = state => ({
//     tasksByIds: state.TaskReducer
// });

export default GroupProgress