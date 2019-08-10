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
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmitSchedule = e => {
        e.preventDefault();
        this.handleShow();
        this.props.onSubmitSchedule(this.props.schedule);

    }

    render() {

        return (<div className="resetDiv">
            <Button  id="footer-button"  onClick={this.handleSubmitSchedule}> Submit </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <h4 id="modalHeader">Schedule submitted!</h4>
                </Modal.Header>
                <Modal.Footer>
                    <Button id="modalButton" onClick={this.handleClose}>
                        Return to Calendar
                    </Button>
                    <a href="/group">
                        <Button id="modalButton">
                            See Group Schedule
                        </Button>
                    </a>
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