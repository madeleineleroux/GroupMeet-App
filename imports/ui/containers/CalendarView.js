import React, {Component} from 'react';
import { toggleAvail } from '../actions/DayAction'
import { connect } from 'react-redux'
import Day from '../components/Day'
import Container from "react-bootstrap/Container";
import Footer from '../components/Footer'
import Col from "react-bootstrap/Col";
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import Calendar from "../components/Calendar";


class CalendarView extends Component {
    render() {
        return (
            <div id="calendarBody">
                <Container>
                    <Header />
                    <Sidebar/>
                {/*rename the state below */}
                    <Calendar/>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default CalendarView
