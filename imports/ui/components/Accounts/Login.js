import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect, browserHistory} from 'react-router-dom'
class Login extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const ele = $(e.target);
        const email = ele.find("#email").val();
        const password = ele.find("#password").val();
        Meteor.loginWithPassword(email, password, (er)=> {
            console.log(this.state);
            if (er) {
                alert(er.reason);
            }
            window.location.reload();
        });
    }

    render() {
        return (
            <div>
                <h2 className = 'loginRedirect'>Login</h2>
                <Form onSubmit={this.onSubmit} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                    </FormGroup >
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter a password" />
                    </FormGroup>
                    <Button className = 'loginRedirect'>Submit</Button>
                </Form>
                <p className = 'loginRedirect'>
                    Don't have an account? <Link to="/register">Register now!</Link>
                </p>
            </div>
        )
    }
}

export default withRouter(Login);
