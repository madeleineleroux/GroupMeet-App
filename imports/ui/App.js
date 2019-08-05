import React, { Component } from 'react';
import WeekView from "./containers/WeekView";
import NavbarA from './components/NavbarA'
import TaskView from './containers/TaskView';
import {Route} from 'react-router-dom'
import GroupView from "./containers/GroupView";
import OverviewView from "./containers/OverviewView";
import AboutView from "./containers/AboutView";
import HelpView from "./containers/HelpView";

const Routes = () => (
        <div>
            <Route exact path = '/' component = {WeekView}/>
            <Route path='/calendar' component={WeekView}/>
            <Route path='/tasks' component={TaskView}/>
            <Route path='/group' component={GroupView}/>
            <Route path='/overview' component={OverviewView}/>
            <Route path='/about' component={AboutView}/>
            <Route path='/help' component={HelpView}/>
        </div>
  );

class App extends Component {
    render() {
        return (
            <div>
                <NavbarA />
                <Routes />
            </div>
        )
    }
}

export default App;