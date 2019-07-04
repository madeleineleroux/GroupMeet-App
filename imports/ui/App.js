import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarView from "./containers/CalendarView";
import './components/App.css'
import NavbarA from './components/NavbarA'
import { fetchSchedule } from "./actions/DayAction";

class App extends Component {
    componentDidMount() {
        this.props.onFetch();
        console.log("Starts");
    }

    render() {
        return (
        <div>
            <NavbarA />
            <CalendarView />
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetch: () => {
            dispatch(fetchSchedule());
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(App);
