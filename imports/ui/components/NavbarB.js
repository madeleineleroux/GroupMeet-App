import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'

class NavbarB extends Component {

    handleLogout() {
        Meteor.logout();
        window.location.reload();
    }

    render() {
        return (
            <div>
                <Container >
                    <Navbar id="navbar" fixed="top" collapseOnSelect expand="sm" variant="dark">
                        <Navbar.Brand href="#home">GroupMeet</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/overview">Overview</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/help">Help</Nav.Link>


                                {/*Dropdown*/}
                            <NavDropdown title="Tools" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
                                <NavDropdown.Item href="/tasks">Tasks</NavDropdown.Item>
                                <NavDropdown.Item href="/group">Group Schedule</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link href="/groups">Group Management</Nav.Link>
                            <Button variant="outline-success" onClick={this.handleLogout}>Logout</Button>
                            </Nav>
                            {/* Tab at the very right */}


                            {/* Modal button */}

                        </Navbar.Collapse>
                    </Navbar>
                </Container>  

            </div>
        )
    }
}

export default withRouter(NavbarB);