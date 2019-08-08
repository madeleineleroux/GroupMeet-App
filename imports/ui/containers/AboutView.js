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
                        <Card id="aboutCard">
                            <Card.Header id="cardTitleName" className="text-center">Claire</Card.Header>
                            <Card.Body id="aboutBio">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com/ciacono" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="3x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/claireiacono/" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="3x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Header id="cardTitleName" className="text-center">Ben</Card.Header>
                            <Card.Body id="aboutBio">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="3x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="3x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Header id="cardTitleName" className="text-center">Madie</Card.Header>
                            <Card.Body id="aboutBio">
                                <Card.Text>
                                    Write some cool stuff about yourself here.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="3x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="3x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
        )
    }
}

export default AboutView
