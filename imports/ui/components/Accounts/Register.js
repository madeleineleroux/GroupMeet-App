import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { Modal} from "react-bootstrap";
class Register extends React.Component {

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

    onSubmit = (e) => {
        e.preventDefault();
        var self = this;
        let avatarArr = ['GIRAFFE', 'PIG', 'FOX', 'PENGUIN', 'LIZARD'];
        let index = Math.floor(Math.random() * 5);
        let avatar = avatarArr[index];
        const ele = $(e.target);
        const email = ele.find("#email").val();
        const password = ele.find("#password").val();
        const confirmPassword = ele.find("#confirmPassword").val();
        const name = ele.find('#name').val();
        if(name.length > 16) {
            alert("Your name must be 16 characters or less.")
        }
        else if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let accountInfo = {
                email: email,
                password: password,
            };
            Accounts.createUser(accountInfo, function (er, result) {
                if (er) {
                    alert(er.reason)
                }
                else {
                    Meteor.users.update(Meteor.userId(), {
                        $set:{
                            profile: {
                                name: name,
                                tasks: [],
                                group: null,
                                avatar: avatar
                        }
                    }});
                }
                self.handleShow();
            })
        }
        else {
            alert("Your passwords must match")
        }
    }

    render() {

        return (
            <div> 
                <h2 className = 'loginRedirect'>Register</h2>
                <Form onSubmit={this.onSubmit} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <Input type="text" name="text" id="name" placeholder="Enter your name" />
                    </FormGroup >
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup >
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter a password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Confirm Password</Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="Confirm your password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <p className = 'loginRedirect'>
                    Have an account? <Link to="/login">Login now!</Link>
                </p>

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title> Visit the welcome page?</Modal.Title>
                    </Modal.Header>
                    <Link to="/welcome">Yes!</Link>
                    <Link to="/">No, I know what I'm doing.</Link>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
          </div>
    );
  }
}

export default withRouter(Register)