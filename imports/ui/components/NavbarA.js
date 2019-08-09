import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

export default class NavbarA extends Component {

    render() {
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
                            <Nav.Link href="/calendar">Calendar</Nav.Link>
                            <Nav.Link href="/tasks">Tasks</Nav.Link>
                            <Nav.Link href="/group">Group Schedule</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/register">Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}
