import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import { Tracker } from 'meteor/tracker';

class NavbarB extends Component {

    state = {
        name: null
    }

    componentDidMount() {
        var context = this;
        Tracker.autorun(function(){
            let user = Meteor.user();
            if (user != undefined) {
                context.setState({ name: user});
            }
        });
    }

    handleLogout() {
        Meteor.logout(function(err){ 
            console.log(err);
            window.location.reload();
        });        
    }

    render() {
        let name;
        if (this.state.name) {
            name = <Nav.Link href="/overview">Welcome, {Meteor.user().profile.name}!</Nav.Link>
        }

        else {
            name = <p></p>
        }

        let button;
        if (this.state.name) {
            button = <Button variant="outline-success" onClick={this.handleLogout}>Logout</Button>
        }
        else {
            button = <p></p>
        }

        return (
            <div>
                <Container >
                    <Navbar id="navbar" fixed="top" collapseOnSelect expand="sm" variant="dark">
                        <Navbar.Brand href="/">GroupMeet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/overview">Overview</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/help">Help</Nav.Link>
                            <Nav.Link href="/group">Group Schedule</Nav.Link>
                            <Nav.Link href="/calendar">My Schedule</Nav.Link>
                            <Nav.Link href="/tasks">Tasks</Nav.Link>
                            </Nav>
                            <Nav>
                            {name}
                            {button}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}


export default withRouter(NavbarB);