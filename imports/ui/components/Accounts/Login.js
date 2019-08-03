import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect, browserHistory} from 'react-router-dom'
class Login extends React.Component {

    state = {
        redirect: false
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      } 

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

        if (this.state.redirect === true) {
            return (<Redirect to='/'/>)
        }

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
                <span>
                    Don't have an account? <Link to="/register">Register now!</Link>
                </span>
            </div>
        )
    }
}

export default withRouter(Login);
