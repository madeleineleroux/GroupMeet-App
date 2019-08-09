import React, {Component} from 'react';
import {Accordion, Card, Button, Container, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class HelpView extends Component {
    render() {
        return (
                <Container id='helpPage'>
                    <h1 id="pageTitle">Help</h1>
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
                                        Create a new group after registering by selecting "Create Group" and then choose a group name.
                                        Your group members can now join your group when they register.
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                    <div id="imageDiv">
                                        <Image src="/screenshots/create_group_1.PNG"/>
                                    </div>
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
                                        Join a pre-existing group after registering by selecting "Join Group" and then enter your group's name.
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                    <div id="imageDiv">
                                        <Image src="/screenshots/join_group_1.PNG"/>
                                    </div>
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
                                    <Card.Text>Update your availability in your <Link to="/calendar">Calendar</Link> by clicking the times you are busy. Once you are ready, hit "Submit".
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                    <div id="imageDiv">
                                        <Image id="helpImage" src="/screenshots/my_schedule.PNG"/>
                                    </div>
                                    <Card.Text>
                                        <br/>
                                        <br/>
                                        Shaded times are when your group mates have selected they are busy.
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                        <Image id="helpImage" src="/screenshots/schedule_shaded.PNG"/>
                                    <Card.Text>
                                        <br/>
                                        <br/>
                                        Once all your group members have added their availability, the <Link to="/group">Group Schedule</Link> will show you the availability for your whole group. Now scheduling meetings is a breeze!
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                    <Image id="helpImage" src="/screenshots/group_schedule.PNG"/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion id="helpAccordion">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Managing tasks and progress
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Card.Text>
                                        On the <Link to="/tasks">Tasks</Link> page, add your tasks, delete tasks, check them off as done, and watch your individual progress update along the way!
                                        <br/>
                                        <br/>
                                        <Image id="helpImage" src="/screenshots/tasks_1.PNG"/>
                                        <br/>
                                        <br/>
                                        The task progress of the whole group will determine the overall group project progress, seen in the <Link to="/overview">Overview</Link> page.
                                        <br/>
                                        <br/>
                                        <Image id="helpImage" src="/screenshots/overview.PNG"/>
                                    </Card.Text>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
        );
    }
}

export default HelpView
