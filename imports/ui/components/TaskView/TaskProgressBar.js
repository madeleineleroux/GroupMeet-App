import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { connect } from "react-redux";

//For individual group member - displayed in TaskMember Component
class TaskProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.getProgress = this.getProgress.bind(this);
    }

    getProgress() {
        let numTotalTasks = this.props.tasks.length;

        if (numTotalTasks == 0) {
            return 0;
        }

        let completedMemberTasks = this.props.tasks.filter(task => task.status % 2 == 1).length;
        return (completedMemberTasks/numTotalTasks) * 100;
    };

    render() {
        let progress = this.getProgress();
        return (
            <ProgressBar
                now={progress} label={`${Math.round(progress)}%`}
            />
        )
    }
}

const mapStateToProps = state => ({
    tasksByIds: state.TaskReducer
});

export default connect(mapStateToProps)(TaskProgressBar)