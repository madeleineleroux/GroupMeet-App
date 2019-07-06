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
        let numTotalTasks = this.props.tasks.length; //right

        if (numTotalTasks == 0) {
            return 0;
        }

        let completedMemberTasks = this.props.tasks.filter(task => task.status % 2 == 1).length;
        //console.log(completedMemberTasks);
        //return (completedMemberTasks.length / numTotalTasks)*100;
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