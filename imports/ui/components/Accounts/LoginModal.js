// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Button } from 'react-bootstrap';
// import { Modal} from "react-bootstrap";
// import { AccountsUIWrapper } from "./AccountsUIWrapper"


// class LoginButton extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             show: false
//         };

//         this.handleShow = this.handleShow.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }

//     handleClose() {
//         this.setState({ show: false });
//     }

//     handleShow() {
//         this.setState({ show: true });
//     }

//     render() {
//         return (<div className="resetDiv">
//             <Modal show={this.state.show} onHide={this.handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Login or Sign Up</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Footer>
//                     <AccountsUIWrapper />
//                     <Button variant="secondary" onClick={this.handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>)
//     }

// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onSubmitSchedule: sched => {
//             dispatch(submitSchedule(sched));
//         }
//     }
// };

// const mapStateToProps = (state) => {
//     return { schedule: state.WeekReducer };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LoginButton);