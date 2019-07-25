import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Button } from 'react-bootstrap';
import { Modal } from "react-bootstrap"; 
import AccountsUIWrapper from './Accounts/AccountsUIWrapper';

export default class NavbarA extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
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
                            <Nav.Link href="/">Overview</Nav.Link>
                            <Nav.Link href="/">About Us</Nav.Link>

                            {/*Dropdown*/}
                            <NavDropdown title="Tools" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/calendar">Calendar</NavDropdown.Item>
                                <NavDropdown.Item href="/tasks">Tasks</NavDropdown.Item>
                                <NavDropdown.Item href="/group">Group Schedule</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                            
                            </Nav>

                            {/* Tab at the very right */}

                            <AccountsUIWrapper className = 'loginForm'/>

                            {/* Modal button */}
                            {/* <Button variant="outline-success" onClick={this.handleShow}>Login or Signup</Button> */}
                        
                        </Navbar.Collapse>
                    </Navbar>


                    {/* Modal stuff, will use later */}
                    {/* <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                            <br></br>
                            Close
                            </Button>
                        </Modal.Footer>
                    </Modal> */}

                </Container>  

            </div>
        )
    }
}
