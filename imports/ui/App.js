import React, { Component } from 'react';
import WeekView from "./containers/WeekView";
import NavbarA from './components/NavbarA'
import NavbarB from './components/NavbarB'
import TaskView from './containers/TaskView';
import {Route, withRouter} from 'react-router-dom'
import GroupView from "./containers/GroupView";
import Register from './components/Accounts/Register';
import Login from './components/Accounts/Login';
import PrivateRoute from './components/Accounts/PrivateRoute';
import LoggedRoute from './components/Accounts/LoggedRoute';
import Group from './components/Groups/Group'

const Routes = () => (
        <div>
            <PrivateRoute exact path = '/' component = {WeekView}/>
            <PrivateRoute path='/calendar' component={WeekView}/>
            <PrivateRoute path='/tasks' component={TaskView}/>
            <PrivateRoute path='/group' component={GroupView}/>
            <LoggedRoute path='/register' component = {Register}/>
            <LoggedRoute path='/login' component = {Login}/>
            <Route path='/groups' component = {Group}/>
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