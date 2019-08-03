import React, { Component } from 'react';
import WeekView from "./containers/WeekView";
import NavbarA from './components/NavbarA'
import NavbarB from './components/NavbarB'
import TaskView from './containers/TaskView';
import {Route, withRouter} from 'react-router-dom'
import GroupView from "./containers/GroupView";
import Register from './components/Accounts/Register';
import Login from './components/Accounts/Login';
const Routes = () => (
        <div>
            <Route exact path = '/' component = {WeekView}/>
            <Route path='/calendar' component={WeekView}/>
            <Route path='/tasks' component={TaskView}/>
            <Route path='/group' component={GroupView}/>
            <Route path='/register' component = {Register}/>
            <Route path='/login' component = {Login}/>
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
                {navigate}>
                <Routes />
            </div>
        )
    }
}

export default App;