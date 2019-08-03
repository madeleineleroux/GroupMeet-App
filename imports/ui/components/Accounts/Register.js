import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect } from 'react-router-dom'

class Register extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const ele = $(e.target);
        const email = ele.find("#email").val();
        const password = ele.find("#password").val();
        const confirmPassword = ele.find("#confirmPassword").val();
        const name = ele.find('#name').val();
        console.log(name);
        if(name.length > 16) {
            alert("Your name must be 16 characters or less.")
        }
        else if (password === confirmPassword && password !== "" && confirmPassword !== "") {
            let accountInfo = {
                email: email,
                password: password,
                name: name,
                Tasks: []
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
                                Tasks: []
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
                <h1>Register</h1>
                <Form onSubmit={this.onSubmit}>
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
                <span>
                    Have an account? <Link to="/login">Login now!</Link>
                </span>
          </div>
    );
  }
}

export default withRouter(Register)