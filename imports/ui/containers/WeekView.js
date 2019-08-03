import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import WeekFooter from '../components/WeekView/WeekFooter';
import WeekSidebar from "../components/WeekView/WeekSidebar";
import WeekHeader from '../components/WeekView/WeekHeader';
import Week from "../components/WeekView/Week";


class WeekView extends Component {
    render() {
        let moment = require('moment');
        moment.defaultFormat = "YYYYMMDD";
        let start = (moment().startOf('week'));
        let month = start.format("MMMM");
        return (
            <div id="calendarBody">
                <Container>
                    <h1 id="calendarMonth">{month}</h1>
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
