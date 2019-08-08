import React from 'react';
import {Card, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class AboutView extends React.Component {
    render() {
        return (
                <Container>
                    <h1 id="pageTitle">About us</h1>
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
                        <Card>
                            <Card.Header>Claire</Card.Header>
                            <Card.Body>
                                <Card.Link href="https://github.com/ciacono">
                                    <FontAwesomeIcon icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/claireiacono/">
                                    <FontAwesomeIcon icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body id="aboutCard">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Ben</Card.Header>
                            <Card.Body>
                                <Card.Link href="https://github.com">
                                    <FontAwesomeIcon icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body id="aboutCard">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Header>Madie</Card.Header>
                            <Card.Body>
                                <Card.Link href="https://github.com">
                                    <FontAwesomeIcon icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com">
                                    <FontAwesomeIcon icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                            <Card.Header>Bio</Card.Header>
                            <Card.Body id="aboutCard">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
        )
    }
}

export default AboutView
