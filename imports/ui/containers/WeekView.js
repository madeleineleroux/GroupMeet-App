import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import WeekFooter from '../components/WeekView/WeekFooter';
import WeekSidebar from "../components/WeekView/WeekSidebar";
import WeekHeader from '../components/WeekView/WeekHeader';
import Week from "../components/WeekView/Week";


class WeekView extends Component {
    render() {
        return (
            <div id="calendarBody">
                <Container>
                    <WeekHeader />
                    <WeekSidebar/>
                    <Week/>
                </Container>
                <WeekFooter />
            </div>
        );
    }
}

export default WeekView
