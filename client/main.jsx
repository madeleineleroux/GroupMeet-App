import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../imports/ui/reducers/index'
import {applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import './main.css';
import {fetchSchedule} from "../imports/ui/actions/DayAction";
import {BrowserRouter as Router} from "react-router-dom"
import {fetchTasks} from "../imports/ui/actions/TaskAction";
import {fetchGroup} from "../imports/ui/actions/GroupAction";
//Import css later!!

const store = createStore(reducers,
  compose(
      applyMiddleware(thunk),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

store.dispatch(fetchSchedule());
store.dispatch(fetchTasks());
store.dispatch(fetchGroup());


Meteor.startup(() => {
  render(
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>, document.getElementById('react-target')
  );
});

