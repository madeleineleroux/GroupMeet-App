import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const ele = $(e.target);
        const email = ele.find("#email").val();
        const password = ele.find("#password").val();
        Meteor.loginWithPassword(email, password, (er)=> {
            if (er) {
                alert(er.reason);
            }
            else {
                this.props.history.push("/")
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup >
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter a password" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(Login);
