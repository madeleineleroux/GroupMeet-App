import React, { Component } from 'react';
import { connect } from 'react-redux';
import CalendarView from "./containers/CalendarView";
import NavbarA from './components/NavbarA'
import TaskView from './containers/TaskView';

class App extends Component {
    render() {
        return (
        <div>
            <NavbarA />
            <CalendarView />
        </div>
        )
    }
}

export default App;