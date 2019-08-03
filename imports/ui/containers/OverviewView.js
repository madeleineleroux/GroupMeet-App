import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GroupProgress from "../components/OverviewView/GroupProgress";

class OverviewView extends Component {
    render() {
        return (
            <div id="overview">
                <Container>
                    <GroupProgress />
                </Container>
            </div>
        );
    }
}

export default OverviewView
