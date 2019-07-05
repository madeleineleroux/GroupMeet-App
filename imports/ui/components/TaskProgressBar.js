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
        let thisMemberTasks = this.props.tasks;
        let allTasks = this.props.tasksByIds;
        let memberTasks = Object.values(allTasks).filter(task => thisMemberTasks.includes(task.id));
        let completedMemberTasks = memberTasks.filter(task => task.complete);
        return (completedMemberTasks.length / numTotalTasks)*100;
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
    tasksByIds: state.TaskReducer.Tasks
});

export default connect(mapStateToProps)(TaskProgressBar)