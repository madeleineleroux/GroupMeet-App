import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect, browserHistory} from 'react-router-dom'
import Helmet from "react-helmet";
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
            window.location.reload();
        });
    }

    render() {
        return (
            <div className="allRegister">
                <Helmet bodyAttributes={{style: 'background-color : #E2E2E2'}}/>
                <h2 id="register" className = 'loginRedirect'>Sign In</h2>
                <div id="login">
                <Form onSubmit={this.onSubmit} className = 'loginForm'>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                        <Label id="passwordLabel" for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter a password" />
                    </FormGroup>
                    <Button id="loginButton">Submit</Button>
                    <p className = 'loginRedirect'>
                        Don't have an account? <Link to="/register">Register now!</Link>
                    </p>
                </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);
