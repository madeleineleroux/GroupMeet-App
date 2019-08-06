import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect } from 'react-router-dom'
import Helmet from "react-helmet";

class Register extends React.Component {


    onSubmit(e) {
        e.preventDefault();
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
                    window.location.reload();
                }
            });
        }
        else {
            alert("Your passwords must match")
        }
    }

    render() {
        return (
            <div>
                <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
                <h2 id="register" className = 'loginRedirect'>Register</h2>
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
    );
  }
}

export default withRouter(Register)