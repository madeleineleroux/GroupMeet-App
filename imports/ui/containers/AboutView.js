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
                                    Claire is a Bachelor of Computer Science student at UBC. Before she fell down the programming rabbit hole, she studied Biology and worked in the insurance industry. When she isn’t coding away in front of her computer, Claire loves to hike, camp, cook, read science fiction and fantasy novels, and drink way too much bubble tea.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com/ciacono" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/claireiacono/" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Header id="cardTitleName" className="text-center">Benjamin</Card.Header>
                            <Card.Body id="aboutBio">
                                <Card.Text>
                                    Benjamin is a recent graduate, holding a Bachelor of Medical Sciences. He is currently pursuing his second degree in Computer Science at the University of British Columbia, and aims to continue his education in machine learning/AI.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com/bwu86" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/benjamin-dq-wu/" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                        <Card id="aboutCard">
                            <Card.Header id="cardTitleName" className="text-center">Madeleine</Card.Header>
                            <Card.Body id="aboutBio">
                                <Card.Text>
                                    Madeleine graduated with a Bachelor of Fine Arts in Fashion & Textiles in 2015. Two years later, she fell in love with programming and decided to change careers. Now she is a second-degree Bachelor of Computer Science student at the University of British Columbia. These days, she uses her Fine Arts background to solve problems creatively.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body id="iconsBody">
                                <Card.Link href="https://github.com/mads1mads" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faGithubSquare} color="#454545" size="2x"/>
                                </Card.Link>
                                <Card.Link href="https://www.linkedin.com/in/madeleine-leroux/" target="_blank">
                                    <FontAwesomeIcon id="icon" icon={faLinkedin} color="#454545" size="2x"/>
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
        )
    }
}

export default AboutView
