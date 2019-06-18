import React, {Component} from 'react';
import { toggleAvail } from '../actions/DayAction'
import { connect } from 'react-redux'
import Day from '../components/Day'
import Container from "react-bootstrap/Container";
import Footer from '../components/Footer'
import Col from "react-bootstrap/Col";
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';

class CalendarView extends Component {

    generateWeek = (curDate) => {
        return 
    }

    render() {

        return (
            <div>
            <Container>
                {/*rename the state below */}
                <Header />
                <Sidebar/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
                <Day times = {this.props.times} id = {this.props.key}/>
            </Container>
            <Footer />
            </div>
        );
    }
}

CalendarView.propTypes = {};

const mapStateToProps = (state) => {
    return {
        times: state
    }
}


export default connect(mapStateToProps)(CalendarView)
