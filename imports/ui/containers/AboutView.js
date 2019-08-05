import React from 'react';
import {Card, Container} from "react-bootstrap";

class AboutView extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <h1 id="month">About us</h1>
                    <div id="aboutTop">
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                GroupMeet is a tool to make group projects simple and organized. Schedule group meetings when everyone's available, organize tasks, keep tabs on project progress, and more with GroupMeet!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                    <div id="aboutBottom">
                        <Card id="aboutCard">
                            <Card.Title>Claire</Card.Title>
                            <Card.Body>
                                <Card.Link href="https://github.com/ciacono">Github</Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/claireiacono/">LinkedIn</Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Title>Ben</Card.Title>
                            <Card.Body>
                                <Card.Link href="/">Github</Card.Link>
                                <Card.Link href="/">LinkedIn</Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Title>Madie</Card.Title>
                            <Card.Body>
                                <Card.Link href="/">Github</Card.Link>
                                <Card.Link href="/">LinkedIn</Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </div>
        )
    }
}

export default AboutView
