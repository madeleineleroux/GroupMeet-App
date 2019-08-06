import React, { Component } from 'react';
import WeekView from "./containers/WeekView";
import NavbarA from './components/NavbarA'
import NavbarB from './components/NavbarB'
import TaskView from './containers/TaskView';
import {Route, withRouter} from 'react-router-dom'
import GroupView from "./containers/GroupView";
<<<<<<< HEAD
import Welcome from "./components/WelcomePage/Welcome"
import OverviewView from "./containers/OverviewView";
import AboutView from "./containers/AboutView";
import HelpView from "./containers/HelpView";

const Routes = () => (
        <div>
            <Route exact path = '/' component = {WeekView}/>
            <Route path='/calendar' component={WeekView}/>
            <Route path='/tasks' component={TaskView}/>
            <Route path='/group' component={GroupView}/>
            <Route path='/welcome' component={Welcome} />
            <Route path='/overview' component={OverviewView}/>
            <Route path='/about' component={AboutView}/>
            <Route path='/help' component={HelpView}/>
=======
import Register from './components/Accounts/Register';
import Login from './components/Accounts/Login';
import PrivateRoute from './components/Accounts/PrivateRoute';
import LoggedRoute from './components/Accounts/LoggedRoute';
const Routes = () => (
        <div>
            <PrivateRoute exact path = '/' component = {WeekView}/>
            <PrivateRoute path='/calendar' component={WeekView}/>
            <PrivateRoute path='/tasks' component={TaskView}/>
            <PrivateRoute path='/group' component={GroupView}/>
            <LoggedRoute path='/register' component = {Register}/>
            <LoggedRoute path='/login' component = {Login}/>
>>>>>>> e7a3c4707f6fcaf070d7b2a9ef971da4683e64fb
        </div>
  );

class App extends Component {
    render() {
        let navigate;
        if(Meteor.userId())
            navigate = <NavbarB />;
        else
            navigate = <NavbarA />;
        return (
            <div>
                {navigate}
                <Routes />
            </div>
        )
    }
}

export default App;