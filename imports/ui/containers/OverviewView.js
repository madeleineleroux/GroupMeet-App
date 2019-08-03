import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import GroupProgress from "../components/OverviewView/GroupProgress";
import MemberScheduleTasks from "../components/OverviewView/MemberScheduleTasks";

class OverviewView extends Component {
    render() {
        return (
            <div id="overview">
                <Container>
                    <GroupProgress />
                    <MemberScheduleTasks />
                </Container>
            </div>
        );
    }
}

export default OverviewView
