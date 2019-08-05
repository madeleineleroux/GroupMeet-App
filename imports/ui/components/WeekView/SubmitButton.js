import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { submitSchedule } from "../../actions/DayAction";
import { Modal} from "react-bootstrap";


class SubmitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        console.log("Closing");
        this.setState({ show: false });
        console.log("Closing");
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmitSchedule = e => {
        e.preventDefault();
        this.handleShow();
        this.props.onSubmitSchedule(this.props.schedule);
        console.log(this.state.show);
    }

    render() {
        return (<div className="resetDiv">
            <Button  id="footer-button"  onClick={this.handleSubmitSchedule}> Submit </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Schedule submitted!</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitSchedule: sched => {
            dispatch(submitSchedule(sched));
        }
    }
};

const mapStateToProps = (state) => {
    return { schedule: state.WeekReducer };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmitButton);