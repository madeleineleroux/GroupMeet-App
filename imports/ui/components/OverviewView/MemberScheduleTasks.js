import React from "react";
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";

class MemberScheduleTasks extends React.Component {
    render() {
        return (
            <div id='MemberScheduleTasks'>
                <Card id='OverviewCard'>
                    <Card.Body>
                        <Card.Text>SOME STUFF</Card.Text>
                        <ListGroup>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
                <Card id='OverviewCard'>
                    <Card.Body>
                        <Card.Text>SOME STUFF</Card.Text>
                        <ListGroup>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                            <ListGroupItem>asfdsafsdf</ListGroupItem>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MemberScheduleTasks