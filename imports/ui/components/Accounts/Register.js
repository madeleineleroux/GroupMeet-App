import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect } from 'react-router-dom'
import { Modal} from "react-bootstrap";
import Helmet from "react-helmet";
import Tracker from 'tracker-component';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            redirect: false
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    checkLogin() {
        var context = this;
        Tracker.autorun(function(){
            let user = Meteor.userId();
            if (user != undefined) {
                context.setState({ redirect: true});
            }
        });
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var self = this;
        let avatarArr = ['GIRAFFE', 'PIG', 'FOX', 'PENGUIN', 'LIZARD', 'BEAR', 'BEAR_FACE', 'ELEPHANT', 'TIGER', 'BLUE_FISH', 'YELLOW_FISH', 'CRAB', 'SQUID', 'JELLYFISH', 'ZEBRA', 'LION', 'DUCK', 'FLAMINGO', 'BUNNY'];
        let index = Math.floor(Math.random() * 19);
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
                    self.checkLogin();
                }
            });
        }
        else {
            alert("Your passwords must match")
        }
    }

    render() {
        var screenHeight = screen.height;
        if (screenHeight < 800) {
            $('body').css('zoom', 0.8);
        } else {
            $('body').css('zoom', 1);
        }

        if (this.state.redirect) { 
            return <Redirect to='/groups' />
         }
         
         else{
            return (
                <div className="allRegister">
                    <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
                    <h2 id="register" className = 'loginRedirect'>Register</h2>
                    <div>
                    <Form onSubmit={this.onSubmit} className = 'loginForm' id="registerForm">
                        <FormGroup id="regFG">
                            <Label id="refLabFirst" for="exampleName">Name</Label>
                            <Input type="text" name="text" id="name" placeholder="Enter your name" />
                            <Label id="refLab"  for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                            <Label id="refLab"  for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter a password" />
                            <Label id="refLab"  for="examplePassword">Confirm Password</Label>
                            <Input type="password" name="password" id="confirmPassword" placeholder="Confirm your password" />
                            <Button id="regButton">Submit</Button>
                            <p className = 'loginRedirect'>
                                Have an account? <Link to="/login">Login now!</Link>
                            </p>
                        </FormGroup>
                    </Form>
                    </div>


                    <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                            <Modal.Title> Let's put you in a group </Modal.Title>
                        </Modal.Header>
                        <a href = "/groups">
                            <Button id="modalButton">
                                Let's Go
                            </Button>
                        </a>
                    </Modal>
            </div>
        );
        }
  }
}

export default withRouter(Register)