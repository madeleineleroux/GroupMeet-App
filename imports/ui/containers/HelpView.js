import React, {Component} from 'react';
import {Accordion, Card, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

class HelpView extends Component {
    render() {
        return (
            <div>
                <Container id='helpPage'>
                    <h1 id="helpHeader">Help</h1>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Creating a group
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Text>
                                        Create a new group after registering by selecting 'Create Group' and then choose a group name.
                                        Your group members can now join your group when they register.
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Joining a group
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Text>
                                        Join a pre-existing group after registering by selecting 'Join Group' and then enter your group's name.
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Scheduling
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Card.Text>Update your availability in your <Link to="/calendar">Calendar</Link> by clicking the times you are busy. Once you are ready, hit 'Submit'.
                                    <br/>
                                    Once all your group members have added their availability, the <Link to="/group">Group Schedule</Link> will show you the availability for your whole group. Now scheduling meetings is a breeze!
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Managing tasks
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Card.Text>
                                        On the <Link to="/tasks">Tasks</Link> page, add your tasks, delete tasks, check them off as done, and watch your individual progress update along the way!
                                        The task progress of the whole group will determine the overall group project progress, seen in the <Link to="/overview">Overview</Link> page.
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Project progress
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Card.Text>
                                        Check your own progress on the <Link to="/tasks">Tasks</Link> page,
                                        and keep up to date on the group's progress as a whole on the <Link to="/overview">Overview</Link> page.
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>
        );
    }
}

export default HelpView
