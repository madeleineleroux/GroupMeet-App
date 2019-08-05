import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Meteor } from 'meteor/meteor';
import { withRouter, Link, Redirect } from 'react-router-dom'

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToWelcome: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggleWelcome = () => {
        this.setState({redirectToWelcome: true});
    }


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
        console.log(this.state.redirectToWelcome);
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
            })
            // this.toggleWelcome();
            this.setState({redirectToWelcome: false});
            console.log(this.state.redirectToWelcome);
        }
        else {
            alert("Your passwords must match")
        }
    }

    render() {

        if (this.state.redirectToWelcome === true) {
            return <Redirect to="/welcome" />
        }

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
          </div>
    );
  }
}

export default withRouter(Register)