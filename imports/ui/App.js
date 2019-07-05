import React, { Component } from 'react';
import WeekView from "./containers/WeekView";
import NavbarA from './components/NavbarA'
import TaskView from './containers/TaskView';

class App extends Component {
    render() {
        return (
        <div>
            <NavbarA />
            <WeekView />
        </div>
        )
    }
}

export default App;